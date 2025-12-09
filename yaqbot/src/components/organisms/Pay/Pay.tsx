import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../../features/product/productSlice';
import { Link, useNavigate } from 'react-router-dom';
import { postOrder } from '../../../services/orderService';
import { useState } from 'react';

export const Pay = () => {
  // Leer del estado
  const cartItems = useSelector((state: any) => state.productCart.products);
  const user = useSelector((state: any) => state.auth.userid);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const totalAmount = cartItems.reduce((acc: number, item: any) => acc + item.totalPrice, 0);

  const handlePay = async () => {
    if (!user) {
      console.error('Usuario no autenticado');
      return;
    }

    setIsProcessing(true);
    const orderData = cartItems.map((item: any) => ({
      productId: item.product.id,
      units: item.quantity,
      unitPrice: item.product.price,
    }));

    try {
      const response = await postOrder(user, orderData);
      console.log('Orden creada con éxito:', response);
      if (response) {
        dispatch(clearCart());
        setShowConfirmation(false);
        setShowResponse(true);
        //navigate('/marketplace');
      }
    } catch (error) {
      console.error('Error al crear la orden:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-4 p-4 md:p-6">
      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-4 md:p-6">
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 pb-4 border-b-2 border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 flex items-center gap-2">
            Resumen de Compra
          </h2>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 md:px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 text-sm md:text-base w-full sm:w-auto"
            onClick={() => navigate('/cart')}
          >
            ← Volver al Carrito
          </button>
        </section>

        {cartItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-500">🌱 Tu carrito está vacío</p>
            <p className="text-gray-400 mt-2">¡Agrega algunas plantas hermosas!</p>
            <button
              className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg"
              onClick={() => navigate('/market-place')}
            >
              Ir al Marketplace
            </button>
          </div>
        )}

        {cartItems.length > 0 && (
          <>
            {/* Lista de productos */}
            <div className="space-y-3 mb-6">
              {cartItems.map((item: any) => (
                <div
                  key={item.product.id}
                  className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex gap-3 flex-1">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg border-2 border-green-200"
                    />
                    <div className="flex flex-col justify-center">
                      <h3 className="text-base md:text-lg font-bold text-green-900">
                        {item.product.name}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600">
                        {item.quantity} x ${item.product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-green-800">${item.totalPrice.toFixed(2)}</p>
                </div>
              ))}
            </div>

            {/* Total y botón de pagar */}
            <div className="border-t-2 border-green-300 pt-6">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 md:p-6 rounded-xl shadow-inner">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xl md:text-2xl font-bold text-gray-700">
                    Total a Pagar:
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-green-700">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => setShowConfirmation(true)}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 md:py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-base md:text-lg"
                >
                  <span>Pagar Ahora</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modal de confirmación */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 transform transition-all">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">¿Está seguro?</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Está a punto de realizar una compra por un total de
              </p>
              <p className="text-3xl font-bold text-green-700 mt-2">${totalAmount.toFixed(2)}</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handlePay}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? '⏳ Procesando...' : '✓ Sí, Confirmar Pago'}
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                disabled={isProcessing}
                className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ✕ Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de confirmación */}
      {showResponse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 transform transition-all border-2 border-green-200">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-3">
                ¡Compra Exitosa!
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-2">
                Tu pedido ha sido procesado correctamente
              </p>
              <p className="text-green-600 font-semibold">🌱 Gracias por tu compra</p>
              <Link to="/marketplace">
                <button className="mt-8 w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                  <span>Volver al Marketplace</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
