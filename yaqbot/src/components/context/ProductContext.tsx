import React, { useContext, useState } from 'react';
import { Product } from '../../models/dataModel';
import { getAllProducts } from '../../services/productService';

interface ProductContextType {
  productsCatalog: Product[];
  getCatalog: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const ProductContext = React.createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [productsCatalog, setProductsCatalog] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const getCatalog = async () => {
    const catalog = await getAllProducts();
    setProductsCatalog(catalog);
  };

  return <ProductContext.Provider value={{ searchTerm, setSearchTerm, getCatalog, productsCatalog }}>{children}</ProductContext.Provider>;
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  return context || ({} as ProductContextType);
};
