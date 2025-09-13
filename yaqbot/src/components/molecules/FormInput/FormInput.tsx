import React from 'react';
import Input from '../../atoms/Input';
import styles from './FormInput.module.css';

interface FormInputProps {
  inputName: string;
  inputProps: {
    inputType: string;
    placeholder?: string;
    isDisabled?: boolean;
    className?: string;
    id: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const FormInput: React.FC<FormInputProps> = ({ inputName, inputProps }) => {
  return (
    <div className={styles.field}>
      <label htmlFor={inputProps.id}>
        <h4>{inputName}</h4>
      </label>
      <Input {...inputProps} />
    </div>
  );
};

export default FormInput;
