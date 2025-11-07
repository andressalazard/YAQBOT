import React from 'react';
import styles from './DescriptionCard.module.css';

interface DescriptionCardProp {
  label: string;
  value: string;
}

const DescriptionCard: React.FC<DescriptionCardProp> = ({ label, value }) => {
  return (
    <div className={styles.description}>
      <h1>{label}</h1>
      <p>{value}</p>
    </div>
  );
};

export default DescriptionCard;
