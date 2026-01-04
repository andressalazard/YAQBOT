import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderTemplate from '../RenderTemplate/RenderTemplate';
import PlantInfo from '../../organisms/PlantInfo/PlantInfo';
import { usePlant } from '../../context/PlantContext';
import styles from './PlantDetailTemplate.module.css';
import { formatDate } from '../../../services/DateTimeService';
import WeatherDashboard from '../../organisms/WeatherDashboard/WeatherDashboard';
import PlantDetailCard from '../../molecules/PlantDetailCard/PlantDetailCard';
import PlantConfiguration from '../../molecules/PlantConfiguration/PlantConfiguration';
import { useWeather } from '../../context/WeatherContext';
import { pumpWater } from '../../../services/deviceService';
import PlantMenu from '../../molecules/PlantMenu/PlantMenu';

const PlantDetailTemplate: React.FC = () => {
  const { plantid } = useParams<{ plantid: string }>();
  const { getPlantDetails, plantDetails } = usePlant();
  const { getWeather, currentWeather, getForecast, forecast } = useWeather();

  const plantImage = plantDetails?.plant.product.image[0];
  useEffect(() => {
    if (plantid) {
      getPlantDetails(plantid);
      getWeather();
      getForecast();
      console.log('weather: ', currentWeather);
    }
  }, []);

  if (!plantDetails) {
    return <h1>No se encontro el detalle del producto</h1>;
  }

  return (
    <RenderTemplate>
      <div className={styles.pageContent}>
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

        <div className={styles.content}>
          {currentWeather && forecast && (
            <WeatherDashboard weatherData={currentWeather} forecastData={forecast} />
          )}
          <div className={styles.dashboard}>
            <PlantMenu
              options={[
                { icon: 'info', navigateTo: '/info' },
                { icon: 'settings', navigateTo: '/plantsettings' },
                { icon: 'calendar_add_on', navigateTo: '/calendar' },
                { icon: 'bar_chart', navigateTo: '/chart' },
              ]}
            />

            <PlantInfo
              details={[
                {
                  label: 'FECHA DE CREACIÓN',
                  value: formatDate(plantDetails.createdAt),
                  isblocked: true,
                },
                {
                  label: 'CLIMAS QUE SOPORTA',
                  value: plantDetails.plant.weather[0],
                  isblocked: true,
                },
                { label: 'TIPO DE LUZ IDEAL', value: plantDetails.plant.light, isblocked: true },
                {
                  label: 'UBICACIÓN O HABITACIÓN',
                  value: plantDetails.location || '',
                  isblocked: false,
                  submitChange: (value: string) => {
                    console.log('this is the new value: ', value);
                  },
                },
              ]}
            />
            <PlantConfiguration />
          </div>
        </div>
      </div>
    </RenderTemplate>
  );
};

export default PlantDetailTemplate;
