import { useState } from 'react';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import styles from './Pagination.module.css';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const numeroInicialPaginacion = (currentPage: number, totalPages: number, nMostrar: number) => {
  const nFinal = numeroFinalPaginacion(currentPage, totalPages, nMostrar);
  let nInicial = nFinal - nMostrar - 1;
  if (nInicial < 0) nInicial = 0;

  return nInicial;
};

const numeroFinalPaginacion = (currentPage: number, totalPages: number, nMostrar: number) => {
  let nFinal = currentPage;

  while (nFinal < totalPages && nFinal < currentPage + nMostrar) {
    nFinal++;
  }

  return nFinal;
};

const Pagination: React.FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  // const totalPages = Math.ceil(totalItems / itemsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);
  const [nMostrar, setNMostrar] = useState(3);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const changeCurrentPage = (pageNumber: number) => {
    onPageChange(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.paginator}>
      <Button
        className={styles.btn_navigators}
        onClick={() => {
          handlePreviousPage();
        }}
      >
        <Icon className={`material-icons ${styles.icons}`} feature="arrow_back" />
      </Button>
      <ul className={styles.pages}>
        {numbers
          .slice(
            numeroInicialPaginacion(currentPage, totalPages, nMostrar),
            numeroFinalPaginacion(currentPage, totalPages, nMostrar)
          )
          .map((number, index) => (
            <li key={index}>
              <Button
                className={`${styles.page_item} ${currentPage === number ? styles.active : ''}`}
                label={number.toString()}
                onClick={() => {
                  changeCurrentPage(number);
                }}
              />
            </li>
          ))}
      </ul>
      <Button
        className={styles.btn_navigators}
        onClick={() => {
          handleNextPage();
        }}
      >
        <Icon className={`material-icons ${styles.icons}`} feature="arrow_forward" />
      </Button>
    </div>
  );
};

export default Pagination;
