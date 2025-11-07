import Image from '../../atoms/Image';
import styles from './PlantDetailCard.module.css';

interface PlantDetailCardProps {
  nickname: string;
  name: string;
  image: string;
  type: string;
  status: string;
}

const PlantDetailCard: React.FC<PlantDetailCardProps> = ({
  image,
  nickname,
  name,
  type,
  status,
}) => {
  return (
    <div className={styles.plant_presentation}>
      <Image src={image} alt="plant-pic" className={styles.plant_image} />
      <h1>{nickname}</h1>
      <div className={styles.description}>
        <p>
          Planta: <span>{name}</span>
        </p>
        <p>
          Tipo: <span>{type}</span>
        </p>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default PlantDetailCard;
