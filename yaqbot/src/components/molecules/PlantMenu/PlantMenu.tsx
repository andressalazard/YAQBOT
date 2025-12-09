import React from 'react';
import styles from './PlantMenu.module.css';
import { Link, useLocation } from 'react-router-dom';

interface plantOptionsType {
  icon: string;
  navigateTo: string;
}

interface PlantMenuProps {
  options: plantOptionsType[];
}

const PlantMenu: React.FC<PlantMenuProps> = ({ options }) => {
  const location = useLocation();

  return (
    <div className={styles.plant_menu}>
      {options.map((option, index) => (
        <Link to={option.navigateTo || '#'}>
          <span
            key={index}
            className={`material-symbols-outlined ${styles.menu_icon} ${location.pathname === option.navigateTo ? styles.selected_option : ''}`}
          >
            {option.icon}
          </span>
        </Link>
      ))}
    </div>
  );
};
export default PlantMenu;
