import { ForecastInfo } from '../../../models/dataModel';
import WeatherForecastCard from '../WeatherForecastCard/WeatherForecastCard';
import styles from './WeatherForecastDashboard.module.css';

interface WeatherForecastDashboardProps {
  weatherForecasts: ForecastInfo[];
}
const WeatherForecastDashboard: React.FC<WeatherForecastDashboardProps> = ({
  weatherForecasts,
}) => {
  return (
    <div className={styles.dashboard}>
      {weatherForecasts.map((forecast, index) => (
        <WeatherForecastCard key={index} forecastInfo={forecast} />
      ))}
    </div>
  );
};

export default WeatherForecastDashboard;
