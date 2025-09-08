import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const baseStyle = {
  padding: '1rem',
  borderRadius: '1rem',
};

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div style={baseStyle} className={className}>
      {children}
    </div>
  );
};

export default Card;
