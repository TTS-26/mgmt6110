import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  Cloud,
  Sun,
  Moon,
  CloudRain,
  CloudDrizzle,
  CloudLightning,
  CloudSun,
  RefreshCw,
  AlertCircle,
  ChevronDown,
  Info,
  Radio,
} from 'lucide-react';

type WeatherDisplayState =
  | { type: 'loading'; sentence: string }
  | { type: 'empty_data'; sentence: string }
  | { type: 'upstream_refused'; sentence: string; status?: number }
  | { type: 'upstream_unreachable'; sentence: string }
  | { type: 'success'; area: string; forecast: string };

export const WeatherBadge: React.FC = () => {
  const [state, setState] = useState<WeatherDisplayState>({
    type: 'loading',
    sentence: 'Loading live weather forecast for Singapore City.',
  });
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const fetchWeather = useCallback(async () => {
    setState({
      type: 'loading',
      sentence: 'Loading live weather forecast for Singapore City.',
    });

    try {
      let response: Response;
      try {
        response = await fetch('/api/weather');
      } catch {
        // Network failure, DNS issue, or connection refused
        setState({
          type: 'upstream_unreachable',
          sentence: 'The weather service is currently unreachable over the network.',
        });
        return;
      }

      const contentType = response.headers.get('content-type') || '';
      let data: any = null;
      if (contentType.includes('application/json')) {
        try {
          data = await response.json();
        } catch {
          data = null;
        }
      }

      // Check non-2xx status
      if (!response.ok) {
        if (data?.error === 'upstream unreachable' || response.status === 503) {
          setState({
            type: 'upstream_unreachable',
            sentence: 'The weather service is currently unreachable over the network.',
          });
          return;
        }

        const statusCode = data?.upstreamStatus || response.status;
        setState({
          type: 'upstream_refused',
          status: statusCode,
          sentence: `The weather service refused the request with HTTP status ${statusCode}.`,
        });
        return;
      }

      // Handle structured payloads
      if (data?.error === 'empty data') {
        setState({
          type: 'empty_data',
          sentence: 'No weather forecast data available for Singapore City.',
        });
        return;
      }

      if (data?.error === 'upstream refused') {
        const statusCode = data.upstreamStatus || response.status;
        setState({
          type: 'upstream_refused',
          status: statusCode,
          sentence: `The weather service refused the request with HTTP status ${statusCode}.`,
        });
        return;
      }

      if (data?.error === 'upstream unreachable') {
        setState({
          type: 'upstream_unreachable',
          sentence: 'The weather service is currently unreachable over the network.',
        });
        return;
      }

      if (data?.area && data?.forecast) {
        setState({
          type: 'success',
          area: data.area,
          forecast: data.forecast,
        });
        return;
      }

      // Missing forecast or empty data
      setState({
        type: 'empty_data',
        sentence: 'No weather forecast data available for Singapore City.',
      });
    } catch {
      setState({
        type: 'upstream_unreachable',
        sentence: 'The weather service is currently unreachable over the network.',
      });
    }
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const getWeatherIcon = (forecast: string) => {
    const text = forecast.toLowerCase();
    if (text.includes('thunder')) {
      return <CloudLightning className="w-3.5 h-3.5 text-[#596244]" />;
    }
    if (text.includes('heavy rain') || text.includes('rain')) {
      return <CloudRain className="w-3.5 h-3.5 text-[#4a6b82]" />;
    }
    if (text.includes('shower') || text.includes('drizzle')) {
      return <CloudDrizzle className="w-3.5 h-3.5 text-[#4a6b82]" />;
    }
    if (text.includes('night')) {
      return text.includes('cloud') ? (
        <Cloud className="w-3.5 h-3.5 text-[#596244]" />
      ) : (
        <Moon className="w-3.5 h-3.5 text-[#596244]" />
      );
    }
    if (text.includes('fair') || text.includes('sunny')) {
      return <Sun className="w-3.5 h-3.5 text-[#b58129]" />;
    }
    if (text.includes('cloud')) {
      return <CloudSun className="w-3.5 h-3.5 text-[#596244]" />;
    }
    return <Cloud className="w-3.5 h-3.5 text-[#596244]" />;
  };

  return (
    <div className="relative inline-block text-left" ref={popoverRef}>
      {/* Trigger Button / Badge */}
      <button
        id="weather-badge-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Singapore City Live Weather Condition"
        title={
          state.type === 'success'
            ? `Singapore City Weather: ${state.forecast}`
            : state.sentence
        }
        className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border text-xs font-medium transition-all cursor-pointer ${
          state.type === 'upstream_refused' || state.type === 'upstream_unreachable'
            ? 'bg-[#fdf3f2] border-[#f0c3bf] text-[#8e2820] hover:bg-[#fceae8]'
            : state.type === 'empty_data'
            ? 'bg-[#faf8f5] border-[#eae6df] text-[#747878] hover:bg-[#f3f0e8]'
            : 'bg-[#efeeea]/80 hover:bg-[#eae8e4] border-[#e4e2de] text-[#1b1c1a]'
        }`}
      >
        {state.type === 'loading' && (
          <div className="flex items-center gap-1.5 text-[#747878] text-[11px]">
            <RefreshCw className="w-3 h-3 animate-spin text-[#596244]" />
            <span id="weather-status-message" className="truncate max-w-[150px] sm:max-w-none">
              {state.sentence}
            </span>
          </div>
        )}

        {state.type === 'empty_data' && (
          <div className="flex items-center gap-1.5 text-[#747878] text-[11px]">
            <Radio className="w-3.5 h-3.5 text-[#747878]" />
            <span id="weather-status-message" className="truncate max-w-[160px] sm:max-w-none">
              {state.sentence}
            </span>
            <ChevronDown className="w-3 h-3 text-[#747878]" />
          </div>
        )}

        {state.type === 'upstream_refused' && (
          <div className="flex items-center gap-1.5 text-[#8e2820] text-[11px]">
            <AlertCircle className="w-3.5 h-3.5 text-[#8e2820] shrink-0" />
            <span id="weather-status-message" className="truncate max-w-[170px] sm:max-w-none">
              {state.sentence}
            </span>
            <ChevronDown className="w-3 h-3 text-[#8e2820]" />
          </div>
        )}

        {state.type === 'upstream_unreachable' && (
          <div className="flex items-center gap-1.5 text-[#8e2820] text-[11px]">
            <AlertCircle className="w-3.5 h-3.5 text-[#8e2820] shrink-0" />
            <span id="weather-status-message" className="truncate max-w-[170px] sm:max-w-none">
              {state.sentence}
            </span>
            <ChevronDown className="w-3 h-3 text-[#8e2820]" />
          </div>
        )}

        {state.type === 'success' && (
          <div className="flex items-center gap-1.5">
            {getWeatherIcon(state.forecast)}
            <div className="flex items-center gap-1 text-[11px]">
              <span className="font-semibold text-[#040505]">City:</span>
              <span id="weather-condition-display" className="truncate max-w-[130px] sm:max-w-[180px] text-[#444748]">
                {state.forecast}
              </span>
            </div>
            <ChevronDown
              className={`w-3 h-3 text-[#747878] transition-transform duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        )}
      </button>

      {/* Popover Details Panel */}
      {isOpen && (
        <div
          id="weather-details-popover"
          className="absolute right-0 mt-2 w-72 sm:w-80 p-4 bg-[#ffffff] border border-[#e4e2de] rounded-2xl shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150 text-[#1b1c1a]"
        >
          <div className="flex items-start justify-between border-b border-[#eae8e4] pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#596244] bg-[#dee7c0] px-2 py-0.5 rounded">
                Live 2-Hour Weather
              </span>
              <h4 className="font-serif-editorial text-base font-semibold text-[#040505] mt-1">
                Singapore · City Area
              </h4>
            </div>

            <button
              id="weather-refresh-button"
              onClick={(e) => {
                e.stopPropagation();
                fetchWeather();
              }}
              disabled={state.type === 'loading'}
              title="Refresh weather data"
              aria-label="Refresh weather data"
              className="p-1.5 hover:bg-[#efeeea] rounded-lg text-[#747878] hover:text-[#040505] transition-colors disabled:opacity-50 cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${state.type === 'loading' ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {/* Details Body */}
          <div className="py-3 space-y-2.5 text-xs">
            {state.type === 'loading' && (
              <div className="p-3 bg-[#fbf9f5] border border-[#eae8e4] rounded-xl flex items-center gap-2 text-[#747878]">
                <RefreshCw className="w-4 h-4 animate-spin text-[#596244]" />
                <p className="text-[11px] leading-relaxed">{state.sentence}</p>
              </div>
            )}

            {state.type === 'empty_data' && (
              <div className="p-3 bg-[#faf8f5] border border-[#eae6df] rounded-xl text-[#747878]">
                <p className="text-[11px] leading-relaxed font-medium">{state.sentence}</p>
              </div>
            )}

            {(state.type === 'upstream_refused' || state.type === 'upstream_unreachable') && (
              <div className="p-3 bg-[#fdf3f2] border border-[#f0c3bf] rounded-xl text-[#8e2820] space-y-2">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p className="text-[11px] leading-relaxed">{state.sentence}</p>
                </div>
                <button
                  onClick={() => fetchWeather()}
                  className="w-full py-1.5 bg-[#8e2820] text-white rounded-lg text-[11px] font-semibold hover:bg-[#7a221b] transition-colors cursor-pointer"
                >
                  Retry Connection
                </button>
              </div>
            )}

            {state.type === 'success' && (
              <div className="flex items-center justify-between p-3 bg-[#fbf9f5] border border-[#eae8e4] rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#efeeea] flex items-center justify-center">
                    {getWeatherIcon(state.forecast)}
                  </div>
                  <div>
                    <div className="text-[11px] text-[#747878] font-medium">Weather Condition</div>
                    <div className="font-semibold text-[#040505] text-xs">
                      {state.forecast}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Attribution */}
          <div
            id="weather-attribution"
            className="pt-2.5 border-t border-[#eae8e4] flex items-center justify-between text-[10px] text-[#747878]"
          >
            <div className="flex items-center gap-1">
              <Info className="w-3 h-3 text-[#596244]" />
              <span>Source:</span>
              <a
                href="https://data.gov.sg"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#040505] font-medium"
              >
                NEA / data.gov.sg
              </a>
            </div>
            <span>Updates ~30m</span>
          </div>
        </div>
      )}
    </div>
  );
};

