import React from 'react';
import styles from './SearchBar.module.css';
import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { useProduct } from '../../context/ProductContext';

interface SearchBarProps {
  submitSearch: () => void;
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ submitSearch, searchTerm }) => {
  const { setSearchTerm } = useProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.search_bar}>
      <Icon className={`material-icons ${styles.search_icon}`} feature='search'></Icon>
      <Input
        className={styles.search_input}
        inputType='text'
        id='searchbar'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Start searching the products you like'
      />
      <Button className={styles.search_button} label='Search' onClick={submitSearch} />
    </div>
  );
};

export default SearchBar;
