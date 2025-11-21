import { ForecastInfo } from '../../../models/dataModel';
import Icon from '../../atoms/Icon';
import styles from './WeatherForecastCard.module.css';

interface WeatherForecastCardProps {
  forecastInfo: ForecastInfo;
}

const WeatherForecastCard: React.FC<WeatherForecastCardProps> = ({ forecastInfo }) => {
  console.log(forecastInfo);
  const { time, temperature, icon, description } = forecastInfo;

  return (
    <div className={styles.content}>
      <p className={styles.hour}>{time}</p>
      {/* <Icon className={`material-symbols-outlined ${styles.weather_icon}`} feature={
        'clear_day'
        } /> */}
      <img className={styles.weather_icon} src={`https://openweathermap.org/img/wn/${icon}.png`} />
      <span className={styles.description}>{description}</span>
      <h1 className={styles.temperature}>{temperature}°</h1>
    </div>
  );
};

export default WeatherForecastCard;
