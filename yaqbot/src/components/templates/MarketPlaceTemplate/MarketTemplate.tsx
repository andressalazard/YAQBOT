import React, { useEffect, useState } from 'react';
import styles from './MarketPlaceTemplate.module.css';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ProductPreview from '../../organisms/ProductPreview/ProductPreview';
import { useProduct } from '../../context/ProductContext';
import Pagination from '../../molecules/Pagination/Pagination';
import { useAppSelector } from '../../../hooks/hook';
import Header from '../../organisms/Header/Header';
import Footer from '../../organisms/Footer/Footer';

const MarketPlaceTemplate: React.FC = () => {
  const user = useAppSelector((state) => state.user.user);
  const profile = useAppSelector((state) => state.user.profile);

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
    <div className={styles.page}>
      <Header
        userAvatar={
          profile?.avatar ||
          'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg'
        }
        profileMenuHeader={{
          username: user?.username || 'testUser',
          email: user?.email || 'test@email.com',
          photo:
            profile?.avatar ||
            'https://i.pinimg.com/736x/c6/3b/a4/c63ba4abc256a03c3f3a830965c365ac.jpg',
        }}
        profileMenuOptions={[
          {
            title: 'Configuración',
            icon: 'settings',
            navigateTo: '/settings',
            type: 'settings',
          },
          { title: 'Cerrar Sesión', icon: 'logout', type: 'logout' },
        ]}
      />

      <div className={styles.marketplace}>
        <SearchBar searchTerm={searchTerm} changePage={setCurrentPage} />
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

      <Footer />
    </div>
  );
};

export default MarketPlaceTemplate;
