import { WeatherData, WeatherForecast } from '../../../models/dataModel';
import WeatherCard from '../../molecules/WeatherCard/WeatherCard';
import WeatherForecastDashboard from '../../molecules/WeatherForecastDashboard/WeatherForecastDashboard';
import styles from './WeatherDashboard.module.css';
interface WeatherDashboardProps {
  weatherData: WeatherData;
  forecastData: WeatherForecast;
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = ({ weatherData, forecastData }) => {
  return (
    <div className={styles.dashboard}>
      <WeatherCard WeatherData={weatherData} />

      <WeatherForecastDashboard weatherForecasts={forecastData.forecast} />
    </div>
  );
};

export default WeatherDashboard;
