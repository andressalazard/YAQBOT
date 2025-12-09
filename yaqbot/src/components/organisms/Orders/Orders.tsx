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
        //console.log('Fetched orders:', orders);
        setData(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="w-full min-h-[50vh] p-5 md:p-10">
      {data && data.length > 0 ? (
        <ul className="space-y-10">
          {data.map((order: any) => (
            <li key={`orderItem-${order.id}`}>
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
