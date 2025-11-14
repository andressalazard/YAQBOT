import WeatherCard from '../../molecules/WeatherCard/WeatherCard';
import WeatherForecastDashboard from '../../molecules/WeatherForecastDashboard/WeatherForecastDashboard';
import styles from './WeatherDashboard.module.css';

interface weatherData {
  temperature: number;
  windSpeed: number;
  location: string;
  date: string;
  hour: string;
  weatherDescription: string;
}

interface forecastData {
  temperature: number;
  hour: string;
  weatherDescription: string;
}

interface WeatherDashboardProps {
  weatherData: weatherData;
  forecastData: forecastData[];
}

const WeatherDashboard: React.FC<WeatherDashboardProps> = ({ weatherData, forecastData }) => {
  return (
    <div className={styles.dashboard}>
      <WeatherCard
        temperature={weatherData.temperature}
        location={weatherData.location}
        date={weatherData.date}
        hour={weatherData.hour}
        weatherDescription={weatherData.weatherDescription}
        windSpeed={weatherData.windSpeed}
      />

      <WeatherForecastDashboard weatherForecasts={forecastData} />
    </div>
  );
};

export default WeatherDashboard;
