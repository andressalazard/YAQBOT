import { fetchData } from '../api/apiClient';

const WEATHER_ENDPOINT = 'weather';

const getCityWeather = async (city: string): Promise<void> => {
  return fetchData(`${WEATHER_ENDPOINT}/city/${city}`);
};

const getCityWeatherByCoords = async (lat: number, lon: number): Promise<void> => {
  return fetchData(`${WEATHER_ENDPOINT}/geolocation/${lat}/${lon}`);
};

export { getCityWeather, getCityWeatherByCoords };
