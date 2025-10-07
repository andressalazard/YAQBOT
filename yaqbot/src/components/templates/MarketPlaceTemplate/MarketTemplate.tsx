import React from 'react';
import styles from './MarketPlaceTemplate.module.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ProductPreview from '../../organisms/ProductPreview/ProductPreview';

const ProductMocks = [
  {
    title: 'Satori Cactus',
    tag: 'plant',
    price: 29.9,
    rate: 5.0,
    image: {
      src: 'https://i.pinimg.com/1200x/f4/3f/71/f43f71bfa4458c651356fd9f449231ce.jpg',
      alt: 'cactus',
    },
  },
  {
    title: 'Black FlowerPot',
    tag: 'accesories',
    price: 12.0,
    rate: 5.0,
    image: {
      src: 'https://i.pinimg.com/1200x/aa/79/67/aa79671f79c9efd87c080bf16fe46ce5.jpg',
      alt: 'flowerpot',
    },
  },
];

const MarketPlaceTemplate: React.FC = () => {
  return (
    <div className={styles.marketplace}>
      <SearchBar
        submitSearch={() => {
          alert('this is working!');
        }}
      />
      <section className={styles.dashboard}>
        {ProductMocks.map((product, index) => (
          <ProductPreview information={product} key={index} />
        ))}
      </section>
    </div>
  );
};

export default MarketPlaceTemplate;
