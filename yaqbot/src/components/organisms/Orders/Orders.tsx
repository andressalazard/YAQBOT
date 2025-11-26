import { useEffect, useState } from 'react';
import { getOrdersByUserId } from '../../../services/orderService';

import { useSelector } from 'react-redux';
import ItemOrder from './ItemOrder';
export const Orders = () => {
  const user = useSelector((state: any) => state.auth.userid);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orders = await getOrdersByUserId(user);
        console.log('Fetched orders:', orders);
        setData(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div>
      {data && data.length > 0 ? (
        <ul>
          {data.map((order: any, index: number) => (
            <li key={`order-${index}`}>
              <p>Order ID: {order.id}</p>
              <p>Date: {new Date(order.orderDate).toLocaleDateString()}</p>
              <p>Total: ${order.total.toFixed(2)}</p>
              <ItemOrder
                id={order.id}
                date={order.orderDate}
                total={order.total}
                status={order.status}
                orderDetails={order.orderDetails}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};
