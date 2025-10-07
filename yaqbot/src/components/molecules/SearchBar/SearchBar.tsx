import React, { useState } from 'react';
import styles from './SearchBar.module.css';
import Icon from '../../atoms/Icon';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import { useProduct } from '../../context/ProductContext';

interface SearchBarProps {
  submitSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ submitSearch }) => {
  const [target, setTarget] = useState<string | undefined>(undefined);
  const { setSearchTerm, filterProducts } = useProduct();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(e.target.value);
    if (target != undefined) {
      setSearchTerm(target);
      filterProducts();
    }
  };

  return (
    <div className={styles.search_bar}>
      <Icon className={`material-icons ${styles.search_icon}`} feature='search'></Icon>
      <Input
        className={styles.search_input}
        inputType='text'
        id='searchbar'
        value={target}
        onChange={handleChange}
        placeholder='Start searching the products you like'
      />
      <Button className={styles.search_button} label='Search' onClick={submitSearch} />
    </div>
  );
};

export default SearchBar;
