import React from 'react';
import MarketPlaceTemplate from '../templates/MarketPlaceTemplate/MarketTemplate';
import { ProfileProvider } from '../context/ProfileContext';

const MarketPlacePage: React.FC = () => {
  return (
    <ProfileProvider>
      <MarketPlaceTemplate />
    </ProfileProvider>
  );
};

export default MarketPlacePage;
