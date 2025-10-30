import React from 'react';
import TextArea from '../atoms/TextArea';

interface FormTextAreaProps {
  className: string;
  label: string;

  textAreaProps: {
    className: string;
    id: string;
    name: string;
    rows: number;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  };
}

const FormTextArea: React.FC<FormTextAreaProps> = ({ className, label, textAreaProps }) => {
  return (
    <div className={className}>
      <label>{label}</label>
      <TextArea {...textAreaProps} />
    </div>
  );
};

export default FormTextArea;
