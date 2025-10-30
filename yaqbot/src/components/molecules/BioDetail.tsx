import React from 'react';

interface BioDetailProps {
  className?: string;
  detailName: string;
  description: string;
}

const BioDetail: React.FC<BioDetailProps> = ({ detailName, description, className }) => {
  return (
    <div className={className}>
      <h3>{detailName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BioDetail;
