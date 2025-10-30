import React from 'react';

interface SelectProps {
  className?: {
    select: string;
    option: string;
  };
  name: string;
  id: string;
  options: {
    label: string;
    value: string;
  }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({ className, name, id, options, value, onChange }) => {
  return (
    <select className={className?.select} name={name} id={id} value={value} onChange={onChange}>
      <>
        {options.map((option, index) => (
          <option className={className?.option} value={option.value} key={index}>
            {option.label}
          </option>
        ))}
      </>
    </select>
  );
};

export default Select;
