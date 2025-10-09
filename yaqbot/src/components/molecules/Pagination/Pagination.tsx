import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
import styles from './Pagination.module.css';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const numbers = [...Array(totalPages + 1).keys()].slice(1);

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
        <Icon className={`material-icons ${styles.icons}`} feature='arrow_back' />
        {/* <span>Prev. Page</span> */}
      </Button>
      <ul className={styles.pages}>
        {numbers.map((number, index) => (
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
        {/* <span>Next Page</span> */}
        <Icon className={`material-icons ${styles.icons}`} feature='arrow_forward' />
      </Button>
    </div>
  );
};

export default Pagination;
