import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderTemplate from '../RenderTemplate/RenderTemplate';
import PlantInfo from '../../organisms/PlantInfo/PlantInfo';
import { usePlant } from '../../context/PlantContext';
import styles from './PlantdetailTemplate.module.css';
import { formatDate, getCurrentDate, getCurrentHour } from '../../../services/DateTimeService';
import { getCityWeatherByCoords } from '../../../services/weatherService';
import { useSettings } from '../../context/SettingsContext';
import WeatherDashboard from '../../organisms/WeatherDashboard/WeatherDashboard';
import PlantDetailCard from '../../molecules/PlantDetailCard/PlantDetailCard';
import PlantConfiguration from '../../molecules/PlantConfiguration/PlantConfiguration';

const mockData = {
  temperature: 24,
  windSpeed: 20,
  location: 'Quito, EC',
  date: getCurrentDate(),
  hour: getCurrentHour(),
  weatherDescription: 'Soleado',
};

const forecastMockData = [
  { hour: '9:00', temperature: 22, weatherDescription: 'clear_day' },
  { hour: '12:00', temperature: 24, weatherDescription: 'clear_day' },
  { hour: '15:00', temperature: 21, weatherDescription: 'clear_day' },
];

const PlantDetailTemplate: React.FC = () => {
  const { plantid } = useParams<{ plantid: string }>();
  const { getPlantDetails, plantDetails } = usePlant();
  const { location, getGeolocation } = useSettings();

  const plantImage = plantDetails?.plant.product.image[0];
  useEffect(() => {
    exampleWeather();
    if (plantid) {
      getPlantDetails(plantid);
      console.log(plantDetails);
    }
  }, []);

  const exampleWeather = async () => {
    getGeolocation();
    if (location) {
      const data = await getCityWeatherByCoords(location.lat, location.lon);
      console.log('this is location data: ', data);
    }

    //const data = await getCityWeather('Quito');
  };

  if (!plantDetails) {
    return <h1>No se encontro el detalle del producto</h1>;
  }

  return (
    <RenderTemplate>
      <div className={styles.pageContent}>
        <section className={styles.header}>
          <PlantDetailCard
            name={plantDetails.plant.name}
            nickname={plantDetails.nickname}
            status={plantDetails.status}
            type={plantDetails.plant.type}
            image={
              plantImage
                ? plantImage
                : 'https://etree.pk/wp-content/uploads/2019/05/ezgif.com-webp-to-jpg.jpg'
            }
          />
          <div className={styles.detail_section}>
            <div className={styles.plant_details}>
              <PlantInfo
                details={[
                  { label: 'FECHA DE CREACIÓN', value: formatDate(plantDetails.createdAt) },
                  { label: 'CLIMAS QUE SOPORTA', value: plantDetails.plant.weather[0] },
                  { label: 'TIPO DE LUZ IDEAL', value: plantDetails.plant.light },
                  { label: 'UBICACIÓN O HABITACIÓN', value: plantDetails.location || '' },
                ]}
              />
              <section className={styles.plant_actions}>
                <button className={styles.action_btn}>Regar mi planta ahora!</button>
                <button className={styles.action_btn}>Programar una rutina</button>
              </section>

              <PlantConfiguration />
            </div>
            <WeatherDashboard weatherData={mockData} forecastData={forecastMockData} />
          </div>
        </section>
        <section className={styles.plantCharts}>Here goes the plants stats and charts</section>
      </div>
    </RenderTemplate>
  );
};

export default PlantDetailTemplate;
