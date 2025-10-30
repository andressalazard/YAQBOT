import React, { useEffect, useState } from 'react';
import styles from './NewPlantForm.module.css';
import Carousel from '../../organisms/Carousel/Carousel';
import { catalogPlant } from '../../../models/dataModel';
import PlantOption from '../PlantOption/PlantOption';

interface NewPlantFormProps {
  plantsCatalog: catalogPlant[];
}

const NewPlantForm: React.FC<NewPlantFormProps> = ({ plantsCatalog }) => {
  const [plantName, setPlantName] = useState<string>('');
  const [chosenPlant, setChosenPlant] = useState<catalogPlant | undefined>(undefined);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlantName(e.target.value);
  };

  const handlePlantSelect = (index: number) => {
    const plant = plantsCatalog[index];
    if (plant) {
      setChosenPlant(plant);
    }
  };

  useEffect(() => {
    console.log('chosen plant: ', chosenPlant);
  }, [chosenPlant]);

  const plantItems = plantsCatalog.map((item, i) => (
    <PlantOption
      key={i}
      id={item.id}
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
            <label htmlFor="plant_name">Escribe el nombre de tu planta</label>
            <input
              id="plant_name"
              type="text"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>
        </section>
        <section className={styles.choose_a_plant}>
          <h1>Escoge una de las siguientes opciones: </h1>
          <Carousel items={plantItems} onSelectItem={handlePlantSelect} />
        </section>
        <footer>
          <button className={styles.create_plant_btn}>Añadir Planta</button>
        </footer>
      </div>
    </div>
  );
};

export default NewPlantForm;
