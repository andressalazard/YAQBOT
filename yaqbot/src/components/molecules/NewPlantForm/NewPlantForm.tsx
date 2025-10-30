import React, { useState } from 'react';
import styles from './NewPlantForm.module.css';
import Carousel from '../../organisms/Carousel/Carousel';
import { catalogPlant } from '../../../models/dataModel';
import PlantOption from '../PlantOption/PlantOption';
import { usePlant } from '../../context/PlantContext';
import { useToast } from '../../context/ToastContext';
import { useAppSelector } from '../../../hooks/hook';

interface NewPlantFormProps {
  plantsCatalog: catalogPlant[];
}

const NewPlantForm: React.FC<NewPlantFormProps> = ({ plantsCatalog }) => {
  const [plantNickname, setPlantNickname] = useState<string>('');
  const [chosenPlant, setChosenPlant] = useState<catalogPlant | undefined>(undefined);
  const userid = useAppSelector((state) => state.auth.userid);
  const { changeEdition } = usePlant();
  const { addToast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlantNickname(e.target.value);
  };

  const handlePlantSelect = (index: number) => {
    const plant = plantsCatalog[index];
    if (plant) {
      setChosenPlant(plant);
    }
  };

  const handleSubmit = () => {
    if (plantNickname === '' || chosenPlant === undefined) {
      addToast('Procura completar todos los campos para registrar tu nueva planta', 'warning');
      return;
    }
    const newRegister = {
      userid,
      plant: {
        plantid: chosenPlant?.id,
        userPlantsName: plantNickname,
      },
    };
    addToast('Tu nueva planta fue registrada con éxito!', 'success');
    console.log('el registro de la nueva planta es: ', newRegister);
    cleanForm();
    changeEdition();
  };

  const cleanForm = () => {
    setChosenPlant(undefined);
    setPlantNickname('');
  };

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
          <h1>Escoge una de las siguientes opciones </h1>
          <Carousel items={plantItems} onSelectItem={handlePlantSelect} />
        </section>
        <footer>
          <button
            className={styles.create_plant_btn}
            onClick={() => {
              handleSubmit();
            }}
          >
            Añadir Planta
          </button>
        </footer>
      </div>
    </div>
  );
};

export default NewPlantForm;
