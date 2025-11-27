import { useState } from 'react';

interface ItemOrderProps {
  id: string;
  date: string;
  total: number;
  status: string;
  orderDetails: OrderDetail[];
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

const ItemOrder = ({ id, date, total, status, orderDetails }: ItemOrderProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    completed: 'bg-green-100 text-green-800 border-green-300',
    cancelled: 'bg-red-100 text-red-800 border-red-300',
    processing: 'bg-blue-100 text-blue-800 border-blue-300',
  };

  const statusEmojis = {
    pending: '⏳',
    completed: '✅',
    cancelled: '❌',
    processing: '🔄',
  };

  const getStatusColor = (status: string) => {
    return (
      statusColors[status.toLowerCase() as keyof typeof statusColors] ||
      'bg-gray-100 text-gray-800 border-gray-300'
    );
  };

  const getStatusEmoji = (status: string) => {
    return statusEmojis[status.toLowerCase() as keyof typeof statusEmojis] || '📦';
  };

  return (
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
            <div className="flex -space-x-2">
              {orderDetails.slice(0, 3).map((detail, index) => (
                <img
                  key={`${detail.id}-preview`}
                  src={detail.product.image[0]}
                  alt={detail.product.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                  style={{ zIndex: 3 - index }}
                />
              ))}
              {orderDetails.length > 3 && (
                <div className="w-12 h-12 rounded-full bg-green-600 text-white flex items-center justify-center border-2 border-white shadow-sm text-xs font-bold">
                  +{orderDetails.length - 3}
                </div>
              )}
            </div>

            {/* Order Details */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                <h3 className="text-lg md:text-xl font-bold text-green-800 truncate">
                  Pedido #{id.slice(0, 8)}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(status)} w-fit flex items-center gap-1`}
                >
                  <span>{getStatusEmoji(status)}</span>
                  <span className="capitalize">{status}</span>
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
            <span>📦</span>
            Detalles del Pedido
          </h4>
          <div className="space-y-3">
            {orderDetails.map((detail) => (
              <div
                key={`${detail.id}-details`}
                className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200 border border-green-100"
              >
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={detail.product.image[0]}
                      alt={detail.product.name}
                      className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg border-2 border-green-200"
                    />
                  </div>

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
  );
};

export default ItemOrder;
