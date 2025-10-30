import React from 'react';
import Input from '../atoms/Input';

interface FormInputProps {
  inputName: string;
  className: string;
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

const FormInput: React.FC<FormInputProps> = ({ inputName, className, inputProps }) => {
  return (
    <div className={className}>
      <label htmlFor={inputProps.id}>
        <h4>{inputName}</h4>
      </label>
      <Input {...inputProps} />
    </div>
  );
};

export default FormInput;
