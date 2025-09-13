import React from 'react';

interface BioDetailProps {
  className?: string;
  id: number;
  detailName: string;
  description: string;
}

const BioDetail: React.FC<BioDetailProps> = ({ id, detailName, description, className }) => {
  return (
    <div className={className} id={id}>
      <h3>{detailName}</h3>
      <p>{description}</p>
    </div>
  );
};

export default BioDetail;
