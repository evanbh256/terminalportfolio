import React, { useState, useEffect } from 'react';
import { Cloud, Sun, CloudRain, CloudSnow, CloudLightning } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LandingPageProps {
  onScrollDown?: () => void;
}

export function LandingPage({ onScrollDown }: LandingPageProps) {
  const [time, setTime] = useState<string>('');
  const [temp, setTemp] = useState<string>('--°F');
  const [weatherCode, setWeatherCode] = useState<number>(1);
  const navigate = useNavigate();

  // Format date
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric'
  }).format(new Date());

  // Time updater
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Weather fetcher for Madison, SD
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=44.0055&longitude=-97.1145&current_weather=true&temperature_unit=fahrenheit');
        const data = await res.json();
        if (data && data.current_weather) {
          setTemp(`${Math.round(data.current_weather.temperature)}°F`);
          setWeatherCode(data.current_weather.weathercode);
        }
      } catch (error) {
        console.error('Failed to fetch weather', error);
      }
    };
    fetchWeather();
  }, []);

  // Render correct weather icon based on WMO code
  const WeatherIcon = () => {
    if (weatherCode === 0) return <Sun size={14} className="ml-1" />;
    if (weatherCode >= 1 && weatherCode <= 3) return <Cloud size={14} className="ml-1" />;
    if (weatherCode >= 51 && weatherCode <= 65) return <CloudRain size={14} className="ml-1" />;
    if (weatherCode >= 71 && weatherCode <= 75) return <CloudSnow size={14} className="ml-1" />;
    if (weatherCode >= 80 && weatherCode <= 82) return <CloudRain size={14} className="ml-1" />;
    if (weatherCode >= 85 && weatherCode <= 86) return <CloudSnow size={14} className="ml-1" />;
    if (weatherCode >= 95) return <CloudLightning size={14} className="ml-1" />;
    return <Cloud size={14} className="ml-1" />; // default
  };

  return (
    <div className="relative min-h-screen h-screen w-full flex-shrink-0 flex flex-col items-center justify-between py-8 px-4 select-none bg-[#1e1e1e] text-gray-200 font-mono">

      {/* Main Content Container (centered) */}
      <div className="my-auto z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl px-2">
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-amber-200 mb-4 tracking-tight">
          Evan Bhandari
        </h1>
        
        <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Bottom Section: Nav + Details */}
      <div className="w-full max-w-5xl z-20 flex flex-col items-center gap-6 pb-2">
        {/* Navigation Buttons */}
        <div className="flex flex-col items-center gap-2.5 text-center px-4">
          <button
            onClick={() => navigate('/fancy')}
            className="text-[11px] sm:text-xs font-bold tracking-widest uppercase underline underline-offset-4 transition-colors duration-300 text-green-400 hover:text-green-300 leading-normal"
          >
            Check out the fancier version of this website
          </button>
          <button 
            onClick={onScrollDown}
            className="text-[11px] sm:text-xs text-gray-600 hover:text-gray-400 transition-colors uppercase tracking-widest font-bold"
          >
            or scroll down
          </button>
        </div>

        {/* Footer info bar on mobile / corner details on desktop */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-gray-500 font-semibold uppercase tracking-wider px-2 sm:px-4">
          <div className="flex gap-3">
            <span>Last updated</span>
            <span>{formattedDate}</span>
          </div>
          <div className="flex gap-3 items-center">
            <span>{temp}</span>
            <span>{time}</span>
            <WeatherIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
