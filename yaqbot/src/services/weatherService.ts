import { fetchData } from '../api/apiClient';
import { WeatherData, WeatherForecast } from '../models/dataModel';

const WEATHER_ENDPOINT = 'weather';

const getCityWeather = async (city: string): Promise<WeatherData> => {
  return fetchData(`${WEATHER_ENDPOINT}/city/${city}`);
};

const getCityWeatherByCoords = async (lat: number, lon: number): Promise<WeatherData> => {
  return fetchData(`${WEATHER_ENDPOINT}/geolocation/${lat}/${lon}`);
};

const getCityForecastByCoords = async (lat: number, lon: number): Promise<WeatherForecast> => {
  return fetchData(`${WEATHER_ENDPOINT}/forecast/geolocation/${lat}/${lon}`);
};

export { getCityWeather, getCityWeatherByCoords, getCityForecastByCoords };
