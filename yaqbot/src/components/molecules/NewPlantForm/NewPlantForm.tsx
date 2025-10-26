import React from 'react';
import styles from './NewPlantForm.module.css';
import Carousel from '../../organisms/Carousel/Carousel';
import { catalogPlant } from '../../../models/dataModel';
import PlantOption from '../PlantOption/PlantOption';

interface NewPlantFormProps {
  plantsCatalog: catalogPlant[];
}

const NewPlantForm: React.FC<NewPlantFormProps> = ({ plantsCatalog }) => {
  const plantItems = plantsCatalog.map((item, i) => (
    <PlantOption
      key={i}
      image={item.image[0]}
      title={item.name}
      type={item.plant.type}
      weather={item.plant.weather}
    />
  ));
  return (
    <div className={styles.plantForm}>
      <header>Registro de nueva planta</header>
      <div className={styles.content}>
        <section>
          <div className={styles.inputField}>
            <label htmlFor="plant_name">Nombre de tu planta</label>
            <input id="plant_name" type="text" />
          </div>
        </section>
        <section>
          <h1>Elige una de las siguientes opciones</h1>
          <Carousel items={plantItems} />
        </section>
      </div>
      <footer>
        <button className={styles.create_plant_btn}>Añadir Planta</button>
      </footer>
    </div>
  );
};

export default NewPlantForm;
