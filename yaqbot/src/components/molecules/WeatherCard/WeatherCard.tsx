import Icon from '../../atoms/Icon';
import styles from './WeatherCard.module.css';

interface WeatherCardProps {
  temperature: number;
  windSpeed: number;
  weatherDescription: string;
  location: string;
  date: string;
  hour: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  temperature,
  windSpeed,
  weatherDescription,
  location,
  date,
  hour,
}) => {
  return (
    <div className={styles.weather_card}>
      <header className={styles.card_header}>
        <h1>{temperature}°</h1>
        <div className={styles.location}>
          <h3>{location}</h3>
          <p>{date}</p>
          <p>{hour}</p>
        </div>
      </header>
      <section className={styles.weather_info}>
        <div className={styles.weather}>
          <Icon
            className={`material-symbols-outlined ${styles.weather_icon}`}
            feature="clear_day"
          />
          <p>{weatherDescription}</p>
        </div>
        <div className={styles.wind}>
          <Icon className={`material-symbols-outlined ${styles.weather_icon}`} feature="air" />
          <p>Viento: {windSpeed} km/h</p>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
