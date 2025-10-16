import React, { useEffect, useState } from 'react';
import styles from './MarketPlaceTemplate.module.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ProductPreview from '../../organisms/ProductPreview/ProductPreview';
import { useProduct } from '../../context/ProductContext';
import Pagination from '../../molecules/Pagination/Pagination';

const MarketPlaceTemplate: React.FC = () => {
  const productsPerPage = 6;
  const { getCatalog, productsCatalog, searchTerm } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const filteredProducts = productsCatalog.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    getCatalog();
  }, []);
  return (
    <div className={styles.marketplace}>
      <SearchBar
        submitSearch={() => {
          alert('its working!');
        }}
        searchTerm={searchTerm}
        changePage={setCurrentPage}
      />
      <section className={styles.dashboard}>
        {visibleProducts.map((product, index) => (
          <ProductPreview information={product} key={index} />
        ))}
      </section>
      {totalPages > 1 && (
        <Pagination
          itemsPerPage={productsPerPage}
          totalItems={productsCatalog.length}
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default MarketPlaceTemplate;
