import { fetchData, patchData, postData } from '../api/apiClient';
import { Product } from '../models/dataModel';

const PRODUCT_ENDPOINT = 'products';

const getAllProducts = async (): Promise<Product[]> => {
  return fetchData(PRODUCT_ENDPOINT);
};

const createProduct = async (product: Partial<Product>): Promise<Product> => {
  return postData(`${PRODUCT_ENDPOINT}/create`, product);
};

const updateProduct = async (product: Product): Promise<any> => {
  return postData(`${PRODUCT_ENDPOINT}/edit`, product);
};

const updatePhoto = async (id: string, file: File) => {
  return patchData(`${PRODUCT_ENDPOINT}/photo/${id}`, file);
};

export { getAllProducts, updateProduct, updatePhoto, createProduct };
