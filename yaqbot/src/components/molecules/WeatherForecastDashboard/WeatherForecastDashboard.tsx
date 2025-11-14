import WeatherForecastCard from '../WeatherForecastCard/WeatherForecastCard';
import styles from './WeatherForecastDashboard.module.css';

interface WeatherForecastCardProps {
  hour: string;
  temperature: number;
  weatherDescription: string;
}

interface WeatherForecastDashboardProps {
  weatherForecasts: WeatherForecastCardProps[];
}
const WeatherForecastDashboard: React.FC<WeatherForecastDashboardProps> = ({
  weatherForecasts,
}) => {
  return (
    <div className={styles.dashboard}>
      {weatherForecasts.map((forecast, index) => (
        <WeatherForecastCard
          key={index}
          hour={forecast.hour}
          temperature={forecast.temperature}
          weatherDescription={forecast.weatherDescription}
        />
      ))}
    </div>
  );
};

export default WeatherForecastDashboard;
