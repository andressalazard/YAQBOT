import Button from '../../atoms/Button';
import ToggleOption from '../ToggleOption/ToggleOption';
import styles from './PlantConfiguration.module.css';

const PlantConfiguration: React.FC = () => {
  const options = [
    { label: 'Mostrar esta planta como pública', isToggle: false },
    { label: 'Activar el autoregado de la planta', isToggle: true },
  ];
  return (
    <div className={styles.configuration_board}>
      <h1>CONFIGURACIÓN GENERAL</h1>
      <div>
        {options.map((option, index) => (
          <ToggleOption key={index} label={option.label} isToggle={option.isToggle} />
        ))}
      </div>
      <Button label="Editar Información de mi planta" className={`${styles.action_btn}`} />
      <Button label="Eliminar mi planta" className={`${styles.action_btn} ${styles.delete_btn}`} />
    </div>
  );
};

export default PlantConfiguration;
