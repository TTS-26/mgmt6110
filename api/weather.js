// Live Singapore conditions for the City area, from data.gov.sg (NEA).
// Three readings are fetched server-side and turned into one small answer the
// page can act on: what the weather is, and which pieces suit it today.
//
// Sources (all open, no credential required):
//   two-hr-forecast  -> forecast wording for the "City" area
//   air-temperature  -> Scotts Road (S111) is the City-area station
//   psi              -> reported by region; "central" covers the City
//
// Temperature refreshes every minute and PSI hourly, so the cache is shorter
// than the 30-minute forecast cycle.
const CACHE_TTL_MS = 10 * 60 * 1000;
let cached = null;
let lastCacheTime = 0;

const FORECAST_URL = 'https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast';
const TEMPERATURE_URL = 'https://api-open.data.gov.sg/v2/real-time/api/air-temperature';
const PSI_URL = 'https://api-open.data.gov.sg/v2/real-time/api/psi';

const CITY_AREA = 'City';
const CITY_TEMPERATURE_STATION = 'S111'; // Scotts Road
const CITY_PSI_REGION = 'central';

// NEA bands: 0-50 good, 51-100 moderate, 101-200 unhealthy.
const PSI_UNHEALTHY = 100;
const HOT_PAVEMENT_C = 32;

function sendJson(res, statusCode, data) {
  if (typeof res.status === 'function' && typeof res.json === 'function') {
    res.status(statusCode).json(data);
  } else {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
  }
}

async function getJson(url, timeoutMs = 8000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json', 'User-Agent': 'SnuffersWeatherApp/1.0' },
    });
    if (!response.ok) {
      const error = new Error(`upstream returned HTTP ${response.status}`);
      error.upstreamStatus = response.status;
      throw error;
    }
    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
}

function readCityForecast(payload) {
  const items = payload?.data?.items;
  if (!Array.isArray(items) || items.length === 0) return null;
  const forecasts = items[0]?.forecasts || [];
  const city = forecasts.find((entry) => entry?.area === CITY_AREA);
  return city?.forecast || null;
}

function readCityTemperature(payload) {
  const readings = payload?.data?.readings;
  if (!Array.isArray(readings) || readings.length === 0) return null;
  const values = readings[0]?.data;
  if (!Array.isArray(values) || values.length === 0) return null;
  const city = values.find((entry) => entry?.stationId === CITY_TEMPERATURE_STATION);
  const value = typeof city?.value === 'number' ? city.value : null;
  if (value === null) return null;
  return Math.round(value * 10) / 10;
}

function readCityPsi(payload) {
  const items = payload?.data?.items;
  if (!Array.isArray(items) || items.length === 0) return null;
  const value = items[0]?.readings?.psi_twenty_four_hourly?.[CITY_PSI_REGION];
  return typeof value === 'number' ? value : null;
}

// Turn the readings into one sentence and a short list of product ids.
//
// Only conditions a visitor can act on earn a suggestion: rain, hot pavement,
// unhealthy air, or strong sun. On an ordinary mild day the route returns no
// recommendation at all and the page shows nothing, rather than stating the
// obvious in the most prominent spot on the screen.
//
// Matching is on keywords rather than exact NEA wordings, so new phrasings
// upstream cannot silently break the recommendation.
function buildAdvice(forecast, tempC, psi) {
  const text = (forecast || '').toLowerCase();
  const isWet = /rain|shower|thunder|drizzle/.test(text);
  const isSunny = /fair|sunny|sun/.test(text);
  const isHazy = /haz|mist/.test(text) || (typeof psi === 'number' && psi > PSI_UNHEALTHY);
  const isHot = typeof tempC === 'number' && tempC >= HOT_PAVEMENT_C;

  const recommend = [];
  const push = (id) => {
    if (!recommend.includes(id)) recommend.push(id);
  };

  let headline = null;

  if (isWet) {
    headline = 'Wet conditions in the City. Waterproof outerwear recommended.';
    push('highland-waterproof-trench');
    push('mist-grey-sherpa-anorak');
  } else if (isHot) {
    headline = 'High pavement temperatures. Paw protection advised.';
    push('ergonomic-trail-walking-booties');
    push('strand-outdoor-paw-sneakers');
    push('provence-cooling-mesh-tank');
  } else if (isSunny) {
    headline = 'Strong sun today. UV coverage recommended for pale coats.';
    push('solstice-uv-protection-poncho');
    push('provence-cooling-mesh-tank');
  } else if (isHazy) {
    // Air quality alone is worth surfacing, even in otherwise unremarkable weather.
    headline = 'Air quality is poor in the City today.';
    push('coastal-breton-nautical-tee');
  }

  // Hot days often coincide with rain or sun, so shoes are added on top
  // rather than replacing the main suggestion.
  if (isHot && !recommend.includes('ergonomic-trail-walking-booties')) {
    push('ergonomic-trail-walking-booties');
  }

  const note = isHazy ? 'Haze in the air today — keep walks short.' : null;

  // Nothing worth acting on: no headline, no products, nothing rendered.
  if (!headline) {
    return { headline: null, note: null, recommend: [] };
  }

  return { headline, note, recommend: recommend.slice(0, 3) };
}

export default async function handler(req, res) {
  const now = Date.now();
  if (cached && now - lastCacheTime < CACHE_TTL_MS) {
    return sendJson(res, 200, cached);
  }

  // Fetched together; a failure in one reading must not lose the others.
  const [forecastResult, temperatureResult, psiResult] = await Promise.allSettled([
    getJson(FORECAST_URL),
    getJson(TEMPERATURE_URL),
    getJson(PSI_URL),
  ]);

  if (forecastResult.status !== 'fulfilled') {
    const reason = forecastResult.reason;
    return sendJson(res, reason?.upstreamStatus || 503, {
      error: 'upstream unavailable',
      reason: `Could not reach the Singapore NEA forecast service: ${
        reason?.message || 'network connection failed'
      }.`,
    });
  }

  const forecast = readCityForecast(forecastResult.value);
  if (!forecast) {
    return sendJson(res, 200, {
      error: 'empty data',
      reason: `Forecast for area "${CITY_AREA}" not found in the current 2-hour report.`,
    });
  }

  const tempC =
    temperatureResult.status === 'fulfilled' ? readCityTemperature(temperatureResult.value) : null;
  const psi = psiResult.status === 'fulfilled' ? readCityPsi(psiResult.value) : null;

  const { headline, note, recommend } = buildAdvice(forecast, tempC, psi);

  const weatherData = {
    area: CITY_AREA,
    forecast,
    tempC,
    psi,
    headline,
    note,
    recommend,
    updatedAt: new Date().toISOString(),
  };

  cached = weatherData;
  lastCacheTime = now;

  return sendJson(res, 200, weatherData);
}
