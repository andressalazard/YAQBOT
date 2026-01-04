import {
  deleteOrder,
  getAllOrders,
  getOrderByStatus,
  updateOrderStatus,
} from '@/services/orderService';
import { useEffect, useState } from 'react';
import ItemOrder from './ItemOrder';

type statusOption = 'ALL' | 'PLACED' | 'CONFIRMED' | 'PROCESSING' | 'DELIVERED';

export const ManagerOrders = () => {
  const [data, setData] = useState<any>([]);
  const [statusFilter, setStatusFilter] = useState<statusOption>('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        let orders = [];
        if (statusFilter === 'ALL') {
          orders = await getAllOrders();
        } else {
          orders = await getOrderByStatus(statusFilter);
        }
        setData(orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    fetchOrders();
  }, [statusFilter]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter, itemsPerPage]);

  const deleteItem = async (orderId: string) => {
    try {
      console.log('Deleting order with ID:', orderId);
      const response = await deleteOrder(orderId);
      console.log('Order deleted successfully:', response);
      // Refresh the orders list after deletion
      setData((prevData: any[]) => prevData.filter((order) => order.id !== orderId));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const changeStatusItem = async (orderId: string, newStatus: string) => {
    try {
      const response = await updateOrderStatus(orderId, newStatus);

      setData((prevData: any[]) =>
        prevData.map((order) =>
          order.id === orderId ? { ...order, status: response.status } : order
        )
      );
    } catch (error) {
      console.log('Error updating', error);
    }
  };

  // Pagination calculations
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
  };

  return (
    <div>
      <h2>Órdenes Recientes</h2>
      <select
        name="orderStatus"
        id="orderStatus"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value as statusOption)}
      >
        <option value="ALL">Todos</option>
        <option value="PLACED">Colocadas</option>
        <option value="CONFIRMED">Confirmadas</option>
        <option value="PROCESSING">En Proceso</option>
        <option value="DELIVERED">Entregadas</option>
      </select>

      {/* Items per page selector */}
      <div className="flex items-center gap-4 my-4">
        <label htmlFor="itemsPerPage" className="text-sm font-medium text-gray-700">
          Items por página:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPageChange(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span className="text-sm text-gray-600">
          Mostrando {startIndex + 1} - {Math.min(endIndex, data.length)} de {data.length}
        </span>
      </div>

      {data && data.length > 0 ? (
        <>
          <ul className="space-y-10">
            {currentData.map((order: any) => (
              <li key={`orderItem-${order.id}`}>
                <ItemOrder
                  id={order.id}
                  date={order.orderDate}
                  total={order.total}
                  status={order.status}
                  orderDetails={order.orderDetails}
                  buyer={order.buyer}
                  deleteItem={deleteItem}
                  changeStatusItem={changeStatusItem}
                />
              </li>
            ))}
          </ul>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-8">
              {/* First Page Button */}
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Primera página"
              >
                <span className="material-icons text-sm">first_page</span>
              </button>

              {/* Previous Button */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Anterior"
              >
                <span className="material-icons text-sm">chevron_left</span>
              </button>

              {/* Page Numbers */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1);

                  const showEllipsis =
                    (page === currentPage - 2 && currentPage > 3) ||
                    (page === currentPage + 2 && currentPage < totalPages - 2);

                  if (showEllipsis) {
                    return (
                      <span key={page} className="px-3 py-2 text-gray-500">
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-lg border transition-colors ${
                        currentPage === page
                          ? 'bg-green-600 text-white border-green-600 font-semibold'
                          : 'border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Siguiente"
              >
                <span className="material-icons text-sm">chevron_right</span>
              </button>

              {/* Last Page Button */}
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Última página"
              >
                <span className="material-icons text-sm">last_page</span>
              </button>
            </div>
          )}
        </>
      ) : (
        <p>No se encontraron órdenes.</p>
      )}
    </div>
  );
};
