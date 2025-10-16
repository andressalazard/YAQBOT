import React from 'react';
import Select from '../atoms/Select';

interface OptionsType {
  label: string;
  value: string;
}

interface FormSelectProps {
  className?: string;
  formLabel: string;
  selectProps: {
    selectClassName?: {
      select: string;
      option: string;
    };
    value?: string;
    name: string;
    id: string;
    options: OptionsType[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  };
}

const FormSelect: React.FC<FormSelectProps> = ({ className, formLabel, value, selectProps }) => {
  return (
    <div className={className}>
      <label>{formLabel}</label>
      <Select {...selectProps} />
    </div>
  );
};

export default FormSelect;
