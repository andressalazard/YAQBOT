import React from 'react';

interface IconProps {
  className?: string;
  feature?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ className, feature, onClick }) => {
  return (
    <span className={className} onClick={onClick}>
      {feature}
    </span>
  );
};

export default Icon;
