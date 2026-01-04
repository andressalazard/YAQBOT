import { deleteData, fetchData, postData } from '../api/apiClient';

const PRODUCT_ENDPOINT = 'order';

const getOrdersByUserId = async (userId: string): Promise<any> => {
  return fetchData(`${PRODUCT_ENDPOINT}/user/${userId}`);
};

const getAllOrders = async (): Promise<any> => {
  return fetchData(`${PRODUCT_ENDPOINT}/`);
};

const deleteOrder = async (orderId: string): Promise<any> => {
  return deleteData(`${PRODUCT_ENDPOINT}/${orderId}`, 'DELETE');
};

const updateOrderStatus = async (orderId: string, newStatus: string): Promise<any> => {
  return postData(`${PRODUCT_ENDPOINT}/update-status/${orderId}`, { status: newStatus });
};

const getOrderByStatus = async (status: string): Promise<any> => {
  return fetchData(`${PRODUCT_ENDPOINT}/status/${status}`);
};

const postOrder = async (userId: string, orderData: any): Promise<string> => {
  return postData(PRODUCT_ENDPOINT, { id: userId, items: orderData });
};

export {
  postOrder,
  updateOrderStatus,
  getOrdersByUserId,
  getAllOrders,
  getOrderByStatus,
  deleteOrder,
};
