import React from 'react';
import styles from './MenuOption.module.css';
import Icon from '../../atoms/Icon';
import { Link } from 'react-router-dom';

interface MenuOptionProps {
  icon: string;
  title: string;
  navigateTo?: string;
  selected: boolean;
}

const MenuOption: React.FC<MenuOptionProps> = ({ icon, title, navigateTo, selected }) => {
  return (
    <Link to={navigateTo || '#'}>
      <div className={selected ? `${styles.option} ${styles.selected_option}` : styles.option}>
        <Icon feature={icon} className={`material-icons ${styles.option_icon}`}></Icon>
        <span className={styles.option_title}>{title}</span>
      </div>
    </Link>
  );
};

export default MenuOption;
