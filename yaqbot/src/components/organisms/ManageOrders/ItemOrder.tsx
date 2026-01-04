import { useState } from 'react';

interface ItemOrderProps {
  id: string;
  date: string;
  total: number;
  status: string;
  orderDetails: OrderDetail[];
  buyer: Buyer | null;
  deleteItem: (orderId: string) => void;
  changeStatusItem: (orderId: string, newStatus: string) => void;
}

interface OrderDetail {
  id: string;
  productId: string;
  unitPrice: number;
  units: number;
  product: Product;
}

interface Product {
  id: string;
  category: string;
  description: string;
  name: string;
  image: any[];
}

interface Profile {
  avatar: string;
  fullname: string;
  phone: string;
}

interface Buyer {
  email: string;
  id: string;
  profile: Profile;
}

const ItemOrder = ({
  id,
  date,
  total,
  status,
  orderDetails,
  buyer,
  deleteItem,
  changeStatusItem,
}: ItemOrderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    completed: 'bg-green-100 text-green-800 border-green-300',
    cancelled: 'bg-red-100 text-red-800 border-red-300',
    processing: 'bg-blue-100 text-blue-800 border-blue-300',
  };

  const getStatusColor = (status: string) => {
    return (
      statusColors[status.toLowerCase() as keyof typeof statusColors] ||
      'bg-gray-100 text-gray-800 border-gray-300'
    );
  };

  const deleteItemHandler = (id: string) => {
    deleteItem(id);
    setShowDeleteModal(false);
  };

  const handleChangeStatusOrder = (status: any) => {
    console.log('value', status);
    changeStatusItem(id, status);
  };

  return (
    <>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 transform transition-all">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
                <svg
                  className="h-8 w-8 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                ¿Eliminar Pedido?
              </h3>
              <p className="text-gray-600 mb-6">
                Esta acción no se puede deshacer. El pedido{' '}
                <span className="font-semibold text-gray-900">#{id.slice(0, 8)}</span> será
                eliminado permanentemente.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => setShowDeleteModal(false)}
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-200 order-2 sm:order-1"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => deleteItemHandler(id)}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 order-1 sm:order-2"
                >
                  Sí, Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-2 border-green-100 mb-4">
        {/* Header - Always Visible */}
        <div
          className="p-4 md:p-6 cursor-pointer hover:bg-green-50 transition-colors duration-200"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Left Section - Order Info */}
            <div className="flex items-start gap-4 flex-1">
              {/* Product Images Preview */}

              {/* Order Details */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg md:text-xl font-bold text-green-800 truncate">
                    Pedido #{id.slice(0, 8)}
                  </h3>

                  <select
                    name="status_order"
                    id=""
                    onClick={(e) => {
                      e.stopPropagation();
                      handleChangeStatusOrder((e.target as HTMLSelectElement).value);
                    }}
                    defaultValue={status}
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(status)} w-fit flex items-center gap-1`}
                  >
                    <option value="PLACED">Pendiente</option>
                    <option value="CONFIRMED">Confirmada</option>
                    <option value="PROCESSING">Procesando</option>
                    <option value="DELIVERED">Entregada</option>
                  </select>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border bg-red-100 text-red-800 border-red-300 w-fit flex items-center gap-1 cursor-pointer hover:bg-red-200 transition-colors`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowDeleteModal(true);
                    }}
                  >
                    <span className="capitalize">Eliminar Orden</span>
                  </span>
                </div>
                <p className="text-sm text-gray-600 flex items-center gap-2">
                  <span className="font-medium">📅</span>
                  {new Date(date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-medium">🌿</span> {orderDetails.length}{' '}
                  {orderDetails.length === 1 ? 'producto' : 'productos'}
                </p>
              </div>
            </div>

            {/* Right Section - Total & Arrow */}
            <div className="flex items-center gap-4 justify-between md:justify-end">
              <div className="text-right">
                <p className="text-xs text-gray-500 mb-1">Total</p>
                <p className="text-2xl md:text-3xl font-bold text-green-700">${total.toFixed(2)}</p>
              </div>
              <button className="text-green-600 hover:text-green-800 transition-transform duration-300">
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Details - Collapsible */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6">
            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
              Detalles del Comprador
            </h4>
            {buyer ? (
              <>
                <p>{buyer.email}</p>
                <p>{buyer.profile.fullname}</p>
                <p>{buyer.profile.phone}</p>
              </>
            ) : (
              <p className="text-gray-700">Información del comprador no disponible.</p>
            )}
          </div>
          <div className="border-t-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-6">
            <h4 className="text-lg font-bold text-green-800 mb-4 flex items-center gap-2">
              Detalles del Pedido
            </h4>
            <div className="space-y-3">
              {orderDetails.map((detail) => (
                <div
                  key={`${detail.id}-details`}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-green-100"
                >
                  <div className="flex gap-4">
                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h5 className="text-base md:text-lg font-bold text-green-900 mb-1">
                        {detail.product.name}
                      </h5>
                      <p className="text-xs md:text-sm text-gray-600 capitalize mb-2">
                        🌿 {detail.product.category}
                      </p>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
                        <span className="text-gray-700">
                          <span className="font-semibold">Precio:</span> $
                          {detail.unitPrice.toFixed(2)}
                        </span>
                        <span className="text-gray-700">
                          <span className="font-semibold">Cantidad:</span> {detail.units}
                        </span>
                        <span className="text-green-700 font-bold">
                          <span className="font-semibold">Subtotal:</span> $
                          {(detail.unitPrice * detail.units).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Footer */}
            <div className="mt-6 pt-4 border-t-2 border-green-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-700">Total del Pedido:</span>
                <span className="text-2xl md:text-3xl font-bold text-green-700">
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemOrder;
