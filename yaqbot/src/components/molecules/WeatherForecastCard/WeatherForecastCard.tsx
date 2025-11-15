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
      <p className={styles.hour}>{hour}</p>
      <Icon
        className={`material-symbols-outlined ${styles.weather_icon}`}
        feature={weatherDescription}
      />
      <span className={styles.description}>{weatherDescription}</span>
      <h1 className={styles.temperature}>{temperature}°</h1>
    </div>
  );
};

export default WeatherForecastCard;
