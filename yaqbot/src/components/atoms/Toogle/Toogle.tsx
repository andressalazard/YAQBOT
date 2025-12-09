import React, { useState } from 'react';
import styles from './Toggle.module.css';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  theme?: 'light' | 'dark';
}

const Toggle: React.FC<ToggleProps> = ({ checked, onChange, theme = 'light' }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={`${styles.body} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={handleInputChange} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default Toggle;
