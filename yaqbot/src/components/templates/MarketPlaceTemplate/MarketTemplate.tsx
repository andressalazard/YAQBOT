import React, { useEffect } from 'react';
import styles from './MarketPlaceTemplate.module.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ProductPreview from '../../organisms/ProductPreview/ProductPreview';
import { useProduct } from '../../context/ProductContext';

const MarketPlaceTemplate: React.FC = () => {
  const { productsCatalog, getCatalog, filteredProducts } = useProduct();

  useEffect(() => {
    getCatalog();
  }, []);

  return (
    <div className={styles.marketplace}>
      <SearchBar
        submitSearch={() => {
          alert('this is working!');
        }}
      />
      <section className={styles.dashboard}>
        {filteredProducts.map((product, index) => (
          <ProductPreview information={product} key={index} />
        ))}

        {/* {productsCatalog.map((product, index) => (
          <ProductPreview information={product} key={index} />
        ))} */}
      </section>
    </div>
  );
};

export default MarketPlaceTemplate;
