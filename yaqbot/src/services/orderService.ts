import { fetchData, postData } from '../api/apiClient';

const PRODUCT_ENDPOINT = 'order';

const getOrdersByUserId = async (userId: string): Promise<any> => {
  return fetchData(`${PRODUCT_ENDPOINT}/user/${userId}`);
};

const postOrder = async (userId: string, orderData: any): Promise<string> => {
  return postData(PRODUCT_ENDPOINT, { id: userId, items: orderData });
};

export { postOrder, getOrdersByUserId };
