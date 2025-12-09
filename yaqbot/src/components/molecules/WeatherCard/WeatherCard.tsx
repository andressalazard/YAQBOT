import { WeatherData } from '../../../models/dataModel';
import Icon from '../../atoms/Icon';
import styles from './WeatherCard.module.css';

interface WeatherCardProps {
  WeatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ WeatherData }) => {
  const { date, time, city, country, icon, description, temperature, humidity, wind } = WeatherData;

  return (
    <div className={styles.weather_card}>
      <header className={styles.card_header}>
        <h1>{temperature}°</h1>
        <div className={styles.location}>
          <h3>
            {city}, {country}
          </h3>
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </header>
      <section className={styles.weather_info}>
        <div className={styles.weather}>
          {/* <Icon
            className={`material-symbols-outlined ${styles.weather_icon}`}
            feature="clear_day"
          /> */}
          <img
            className={styles.weather_img}
            src={`https://openweathermap.org/img/wn/${icon}.png`}
          />
          <p>{description}</p>
        </div>
        <div className={styles.wind}>
          <Icon className={`material-symbols-outlined ${styles.weather_icon}`} feature="air" />
          <p>Viento: {wind} km/h</p>
        </div>
      </section>
    </div>
  );
};

export default WeatherCard;
