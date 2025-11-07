import React from 'react';
import { ProfileProvider } from '../context/ProfileContext';
import { PlantProvider } from '../context/PlantContext';
import PlantDetailTemplate from '../templates/PlantDetailTemplate/PlantDetailTemplate';

const PlantDetailsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <PlantProvider>
        <PlantDetailTemplate />
      </PlantProvider>
    </ProfileProvider>
  );
};

export default PlantDetailsPage;
