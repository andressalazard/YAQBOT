import Icon from '../../atoms/Icon';
import styles from './WeatherForecastCard.module.css';

interface WeatherForecastCardProps {
  hour: string;
  temperature: number;
  weatherDescription: string;
}

const WeatherForecastCard: React.FC<WeatherForecastCardProps> = ({
  hour,
  temperature,
  weatherDescription,
}) => {
  return (
    <div className={styles.content}>
      <p>{hour}</p>
      <Icon
        className={`material-symbols-outlined ${styles.weather_icon}`}
        feature={weatherDescription}
      />
      <h1>{temperature}</h1>
    </div>
  );
};

export default WeatherForecastCard;
