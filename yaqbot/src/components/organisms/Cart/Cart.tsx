import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, updateQuantity, clearCart } from '../../../features/product/productSlice';

export const Cart = () => {
  // Leer del estado
  const cartItems = useSelector((state: any) => state.productCart.products);
  const dispatch = useDispatch();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl">
      <section className="flex justify-between items-center mb-6 pb-4 border-b-2 border-green-200">
        <h2 className="text-3xl font-bold text-green-800 flex items-center gap-2">🛒 Mi Carrito</h2>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
          onClick={() => dispatch(clearCart())}
        >
          Vaciar Carrito
        </button>
      </section>
      {cartItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-2xl text-gray-500">🌱 Tu carrito está vacío</p>
          <p className="text-gray-400 mt-2">¡Agrega algunas plantas hermosas!</p>
        </div>
      )}
      {cartItems.length > 0 && (
        <>
          {cartItems.map((item: any) => (
            <section
              key={item.product.id}
              className="grid grid-cols-[100px_1fr_auto_auto] gap-6 mb-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <figure className="flex items-center">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-20 h-20 object-cover rounded-lg border-2 border-green-200"
                />
              </figure>
              <div className="flex flex-col justify-center">
                <h2 className="text-xl font-bold text-green-900">{item.product.name}</h2>
                <p className="text-sm text-gray-600 capitalize">🌿 {item.product.category}</p>
                <p className="text-lg font-semibold text-green-700 mt-1">
                  ${item.product.price.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        productId: item.product.id,
                        quantity: item.quantity - 1,
                      })
                    )
                  }
                  className="w-8 h-8 bg-red-100 hover:bg-red-200 text-red-600 font-bold rounded-full transition-colors duration-200"
                >
                  -
                </button>
                <span className="text-xl font-bold text-gray-800 min-w-[2rem] text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        productId: item.product.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                  className="w-8 h-8 bg-green-100 hover:bg-green-200 text-green-600 font-bold rounded-full transition-colors duration-200"
                >
                  +
                </button>
              </div>
              <div className="flex flex-col items-end justify-center gap-2">
                <p className="text-2xl font-bold text-green-800">${item.totalPrice.toFixed(2)}</p>
                <button
                  onClick={() => dispatch(removeProduct(item.product.id))}
                  className="text-red-500 hover:text-red-700 font-semibold text-sm underline transition-colors duration-200"
                >
                  Eliminar
                </button>
              </div>
            </section>
          ))}
        </>
      )}
      <div className="border-t-2 border-green-300 my-6"></div>
      <section className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl shadow-inner">
        <p className="text-right text-3xl font-bold text-green-900 flex justify-end items-center gap-2">
          <span className="text-xl text-gray-600">Total:</span>
          <span className="text-green-700">
            ${cartItems.reduce((acc: number, item: any) => acc + item.totalPrice, 0).toFixed(2)}
          </span>
        </p>
      </section>
    </div>
  );
};
