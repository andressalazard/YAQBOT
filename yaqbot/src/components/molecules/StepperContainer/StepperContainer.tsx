import React, { useEffect, useState } from 'react';
import { Stepper } from '../../../models/types';
import StepperItem from '../../atoms/StepperItem/StepperItem';
import styles from './StepperContainer.module.css';

interface StepperContainerType {
  steppers: Stepper[];
  name: string;
}

const StepperContainer: React.FC<StepperContainerType> = ({ name, steppers }) => {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    console.log('el valor escogido es ', value);
  }, [value]);

  return (
    <div className={styles.container}>
      {steppers.map((stepper, index) => (
        <div>
          <StepperItem
            key={index}
            index={index}
            name={name}
            stepper={stepper}
            checked={value === stepper.value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default StepperContainer;
