// In-memory cache for 30 minutes (source updates every 30 minutes)
const CACHE_TTL_MS = 30 * 60 * 1000;
let cachedForecast = null;
let lastCacheTime = 0;

function sendJson(res, statusCode, data) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    res.status(statusCode).json(data);
  } else {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  }
}

export default async function handler(req, res) {
  const now = Date.now();
  const isCacheValid = cachedForecast && now - lastCacheTime < CACHE_TTL_MS;

  if (isCacheValid && cachedForecast) {
    return sendJson(res, 200, cachedForecast);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const response = await fetch(
      'https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast',
      {
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
          'User-Agent': 'SnuffersWeatherApp/1.0',
        },
      }
    );

    clearTimeout(timeoutId);

    // Check response.ok before reading response body
    if (!response.ok) {
      return sendJson(res, response.status, {
        error: 'upstream refused',
        upstreamStatus: response.status,
        reason: `Upstream NEA weather service returned HTTP ${response.status}: ${response.statusText || 'Request refused'}.`,
      });
    }

    const payload = await response.json();
    const items = payload?.data?.items;

    if (!Array.isArray(items) || items.length === 0) {
      return sendJson(res, 200, {
        error: 'empty data',
        reason: 'No weather forecast items were returned by the NEA service.',
      });
    }

    const latestItem = items[0];
    const forecasts = latestItem?.forecasts || [];

    // Find the forecast area "City"
    const cityForecast = forecasts.find((item) => item?.area === 'City');

    if (!cityForecast || !cityForecast.forecast) {
      return sendJson(res, 200, {
        error: 'empty data',
        reason: 'Forecast for area "City" not found in current 2-hour report.',
      });
    }

    // Return only the weather fields the screen actually needs
    const weatherData = {
      area: cityForecast.area,
      forecast: cityForecast.forecast,
    };

    // Store in 30-minute cache
    cachedForecast = weatherData;
    lastCacheTime = now;

    return sendJson(res, 200, weatherData);
  } catch (error) {
    return sendJson(res, 503, {
      error: 'upstream unreachable',
      reason: `Could not reach Singapore NEA weather service: ${error?.message || 'Network connection failed'}.`,
    });
  }
}

