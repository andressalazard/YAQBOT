import React from 'react';
import styles from './NewPlantForm.module.css';

const NewPlantForm: React.FC = () => {
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
          <div className={styles.carousel}>Aqui va el carousel</div>
        </section>
      </div>
      <footer>
        <button className={styles.create_plant_btn}>Añadir Planta</button>
      </footer>
    </div>
  );
};

export default NewPlantForm;
