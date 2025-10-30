import React from 'react';

interface InputFileProps {
  className: string;
  onFileSelect: (file: File) => void;
}

const InputFile: React.FC<InputFileProps> = ({ className, onFileSelect }) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return <input type='file' className={className} onChange={handleFileChange} />;
};

export default InputFile;
