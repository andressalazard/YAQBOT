import React from 'react';
import styles from './DescriptionRack.module.css';
import DescriptionCard from '../../molecules/DescriptionCard/DescriptionCard';

interface descriptionType {
  label: string;
  value: string;
}

interface DescriptionRackProps {
  descriptionList: descriptionType[];
}

const DescriptionRack: React.FC<DescriptionRackProps> = ({ descriptionList }) => {
  return (
    <div className={styles.rack}>
      {descriptionList.map((description, index) => (
        <DescriptionCard key={index} label={description.label} value={description.value} />
      ))}
    </div>
  );
};

export default DescriptionRack;
