import React from 'react';
import { ProfileProvider } from '../context/ProfileContext';
import PlantTemplate from '../templates/PlantTemplate/PlantTemplate';
import { PlantProvider } from '../context/PlantContext';

const UserPlantsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <PlantProvider>
        <PlantTemplate />
      </PlantProvider>
    </ProfileProvider>
  );
};

export default UserPlantsPage;
