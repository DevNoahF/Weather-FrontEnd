const WeatherIconsConfig: Record<string, string> = {
  'clear-day': '/assets/weather-icons/partly-cloudy-day.png',
  'clear-night': '/assets/weather-icons/clear-night.png',
  'partly-cloudy-day': '/assets/weather-icons/partly-cloudy-day.png',
  'partly-cloudy-night': '/assets/weather-icons/partly-cloudy-night.png',
  rain: '/assets/weather-icons/rain.png',
  snow: '/assets/weather-icons/snow.png',
  thunder: '/assets/weather-icons/thunder-rain.png',
  wind: '/assets/weather-icons/wind.png',
  fog: '/assets/weather-icons/default-weather.png',
  cloudy: '/assets/weather-icons/cloudy.png',
  hail: '/assets/weather-icons/default-weather.png',
};

export default function getWeatherIcon(iconCode?: string): string {
  if (!iconCode) return '/assets/weather-icons/default-weather.png';
  const key = iconCode.toLowerCase();
  return WeatherIconsConfig[key] ?? '/assets/weather-icons/default-weather.png';
}
