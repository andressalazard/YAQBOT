import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RenderTemplate from '../RenderTemplate/RenderTemplate';
import PlantInfo from '../../organisms/PlantInfo/PlantInfo';
import { usePlant } from '../../context/PlantContext';
import styles from './PlantdetailTemplate.module.css';

const PlantDetailTemplate: React.FC = () => {
  const { plantid } = useParams<{ plantid: string }>();
  const { getPlantDetails, plantDetails } = usePlant();

  const plantImage = plantDetails?.plant.product.image[0];
  useEffect(() => {
    if (plantid) {
      getPlantDetails(plantid);
      console.log(plantDetails);
    }
  }, []);

  if (!plantDetails) {
    return <h1>No se encontro el detalle del producto</h1>;
  }

  return (
    <RenderTemplate>
      <div className={styles.pageContent}>
        <PlantInfo
          image={
            plantImage
              ? plantImage
              : 'https://etree.pk/wp-content/uploads/2019/05/ezgif.com-webp-to-jpg.jpg'
          }
          plant={{
            name: plantDetails.plant.name,
            nickname: plantDetails.nickname,
            status: plantDetails.status,
            type: plantDetails.plant.type,
          }}
        />

        <section className={styles.weather}>Here goes the weather charts</section>

        <section className={styles.plantActions}>
          Here goes the plants actions like watering once, or programming a routine
        </section>

        <section className={styles.plantCharts}>Here goes the plants stats and charts</section>
      </div>
    </RenderTemplate>
  );
};

export default PlantDetailTemplate;
