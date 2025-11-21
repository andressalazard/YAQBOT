import React from 'react';
import { ProfileProvider } from '../context/ProfileContext';
import { PlantProvider } from '../context/PlantContext';
import PlantDetailTemplate from '../templates/PlantDetailTemplate/PlantDetailTemplate';
import { WeatherProvider } from '../context/WeatherContext';

const PlantDetailsPage: React.FC = () => {
  return (
    <ProfileProvider>
      <PlantProvider>
        <WeatherProvider>
          <PlantDetailTemplate />
        </WeatherProvider>
      </PlantProvider>
    </ProfileProvider>
  );
};

export default PlantDetailsPage;
