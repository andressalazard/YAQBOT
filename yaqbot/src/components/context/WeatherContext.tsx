import React, { ReactNode, useContext, useState } from 'react';
import { useSettings } from './SettingsContext';
import { getCityForecastByCoords, getCityWeatherByCoords } from '../../services/weatherService';
import { WeatherData, WeatherForecast } from '../../models/dataModel';

interface WeatherContextType {
  currentWeather: WeatherData | null;
  forecast: WeatherForecast | null;
  isLoading: boolean;

  getWeather: () => void;
  getForecast: () => void;
}

/*CONTEXT*/
export const WeatherContext = React.createContext<WeatherContextType | undefined>(undefined);

/*PROVIDER*/
export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentWeather, setCurrentWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const { location, getGeolocation } = useSettings();

  const getWeather = async () => {
    setIsLoading(true);
    try {
      getGeolocation();
      if (location) {
        const weather = await getCityWeatherByCoords(location.lat, location.lon);
        setCurrentWeather(weather);
      }
    } catch (error) {
      throw new Error(`Error at fetching weather data - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getForecast = async () => {
    setIsLoading(true);
    try {
      getGeolocation();
      if (location) {
        const forecastData = await getCityForecastByCoords(location.lat, location.lon);
        setForecast(forecastData);
      }
    } catch (error) {
      throw new Error(`Error at fetching forecast data - ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ currentWeather, forecast, isLoading, getWeather, getForecast }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

/*HOOK*/
export const useWeather = (): WeatherContextType => {
  const context = useContext(WeatherContext);
  return context || ({} as WeatherContextType);
};
