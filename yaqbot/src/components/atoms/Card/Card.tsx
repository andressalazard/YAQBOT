import styles from './Card.module.css';

import React from 'react';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
