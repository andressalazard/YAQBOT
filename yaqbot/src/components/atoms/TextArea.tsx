import React from 'react';

interface TextAreaProps {
  className: string;
  id: string;
  name: string;
  rows: number;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ className, id, name, rows, value, onChange }) => {
  return <textarea className={className} id={id} name={name} rows={rows} value={value} onChange={onChange} />;
};

export default TextArea;
