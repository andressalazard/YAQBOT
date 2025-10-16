import React from 'react';
import { Stepper } from '../../../models/types';
import styles from './StepperItem.module.css';

interface SteperProps {
  stepper: Stepper;
  index: number;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StepperItem: React.FC<SteperProps> = ({ stepper, index, name, checked, onChange }) => {
  return (
    <div className={`${styles.stepper_body}  ${styles[`stepper_${stepper.type}`]}`}>
      <span className={styles.index}>{index + 1}</span>
      <input type='radio' id={stepper.title} name={name} value={stepper.value} checked={checked} onChange={onChange} />
      <label htmlFor={stepper.title}>{stepper.title}</label>
    </div>
  );
};

export default StepperItem;
