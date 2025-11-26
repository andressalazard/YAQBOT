import { fetchData, postData } from '../api/apiClient';
import { Product } from '../models/dataModel';

const PRODUCT_ENDPOINT = 'order';

const getOrderById = async (orderId: string): Promise<Order> => {
  return fetchData(`${PRODUCT_ENDPOINT}/${orderId}`);
};

const getOrdersByUserId = async (userId: string): Promise<any> => {
  return fetchData(`${PRODUCT_ENDPOINT}/user/${userId}`);
};

const postOrder = async (userId: string, orderData: any): Promise<string> => {
  return postData(PRODUCT_ENDPOINT, { id: userId, items: orderData });
};

export { getOrderById, postOrder, getOrdersByUserId };
