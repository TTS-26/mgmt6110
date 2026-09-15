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
  const checkedAt = new Date().toISOString();
  let upstreamAnswered = false;
  let upstreamStatus = null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const response = await fetch(
      'https://api-open.data.gov.sg/v2/real-time/api/two-hr-forecast',
      {
        method: 'GET',
        signal: controller.signal,
        headers: {
          Accept: 'application/json',
          'User-Agent': 'SnuffersWeatherApp/1.0',
        },
      }
    );

    clearTimeout(timeoutId);

    upstreamAnswered = true;
    upstreamStatus = response.status;
  } catch (err) {
    upstreamAnswered = false;
    upstreamStatus = null;
  }

  // Singapore NEA/data.gov.sg weather API requires no API key or signup; no credential is configured or required
  const healthData = {
    keyConfigured: false,
    upstreamAnswered,
    upstreamStatus,
    checkedAt,
  };

  sendJson(res, 200, healthData);
}

