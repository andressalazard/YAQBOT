import React, { useContext, useEffect, useState } from 'react';
import { Product } from '../../models/dataModel';
import { getAllProducts } from '../../services/productService';

interface ProductContextType {
  productsCatalog: Product[];
  filteredProducts: Product[];
  getCatalog: () => void;
  filterProducts: () => void;
  setSearchTerm: (term: string) => void;
}

export const ProductContext = React.createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsCatalog, setProductsCatalog] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    setFilteredProducts(productsCatalog);
  }, [productsCatalog]);

  const getCatalog = async () => {
    const catalog = await getAllProducts();
    setProductsCatalog(catalog);
  };

  const filterProducts = () => {
    const filteredProducts = productsCatalog.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredProducts(filteredProducts);
  };

  return (
    <ProductContext.Provider value={{ setSearchTerm, productsCatalog, getCatalog, filterProducts, filteredProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  return context || ({} as ProductContextType);
};
