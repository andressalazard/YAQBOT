import React from 'react';

interface IconProps {
  className?: string;
  feature?: string;
}

const Icon: React.FC<IconProps> = ({ className, feature }) => {
  return <span className={className}>{feature}</span>;
};

export default Icon;
