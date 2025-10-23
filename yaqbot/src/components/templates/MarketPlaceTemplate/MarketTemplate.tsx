import React, { useEffect, useState } from 'react';
import styles from './MarketPlaceTemplate.module.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ProductPreview from '../../organisms/ProductPreview/ProductPreview';
import { useProduct } from '../../context/ProductContext';
import Pagination from '../../molecules/Pagination/Pagination';
import RenderTemplate from '../RenderTemplate/RenderTemplate';

const MarketPlaceTemplate: React.FC = () => {
  const productsPerPage = 6;
  const { getCatalog, productsCatalog, searchTerm } = useProduct();
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const filteredProducts = productsCatalog.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const visibleProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    getCatalog();
  }, []);
  return (
    <RenderTemplate>
      <div className={styles.marketplace}>
        <div className={styles.titleSearch}>
          <h1>Lista de productos</h1>
          <SearchBar searchTerm={searchTerm} changePage={setCurrentPage} />
        </div>
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
    </RenderTemplate>
  );
};

export default MarketPlaceTemplate;
