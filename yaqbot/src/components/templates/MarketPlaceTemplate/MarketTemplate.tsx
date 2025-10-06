import React from 'react';
import styles from './MarketPlaceTemplate.module.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';

const MarketPlaceTemplate: React.FC = () => {
  return (
    <div className={styles.marketplace}>
      <SearchBar
        submitSearch={() => {
          alert('this is working!');
        }}
      />
    </div>
  );
};

export default MarketPlaceTemplate;
