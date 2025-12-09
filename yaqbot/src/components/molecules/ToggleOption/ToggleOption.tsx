import React, { useState } from 'react';
import Toggle from '../../atoms/Toogle/Toogle';
import styles from './ToggleOption.module.css';

interface ToggleOptionProps {
  label: string;
  isToggle: boolean;
}

const ToggleOption: React.FC<ToggleOptionProps> = ({ label, isToggle }) => {
  const [isToggled, setIsToggled] = useState<boolean>(isToggle);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const handleToggle = (checked: boolean) => {
    setIsToggled(checked);
    setTheme(checked ? 'dark' : 'light');
  };
  return (
    <div className={styles.option_body}>
      <p>{label}</p>
      <Toggle checked={isToggled} onChange={handleToggle} theme={theme} />
    </div>
  );
};

export default ToggleOption;
