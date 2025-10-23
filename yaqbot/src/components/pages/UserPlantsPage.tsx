import React from 'react';
import { ProfileProvider } from '../context/ProfileContext';
import PlantTemplate from '../templates/PlantTemplate/PlantTemplate';

const UserPlantsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <PlantTemplate />
    </ProfileProvider>
  );
};

export default UserPlantsPage;
