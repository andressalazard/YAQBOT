import { fetchData } from '../api/apiClient';
import { Product } from '../models/dataModel';

const PRODUCT_ENDPOINT = 'products';

const getAllProducts = async (): Promise<Product[]> => {
  return fetchData(PRODUCT_ENDPOINT);
};

export { getAllProducts };
