import { ManagerOrders } from '../organisms/ManageOrders/ManageOrders';
import { useState } from 'react';
import { ManageProducts } from '../organisms/ManageProducts/ManageProducts';

export const HomeAdminPage = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'products' | 'create-product'>('orders');

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <header className="bg-white shadow-md px-8 py-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Panel de Administración</h1>
        <nav className="flex gap-4 border-b-2 border-gray-200">
          <button
            className={`px-6 py-3 font-medium text-base cursor-pointer relative transition-all duration-300 border-b-3 ${
              activeTab === 'orders'
                ? 'text-green-500 border-b-4 border-green-500'
                : 'text-gray-600 border-b-4 border-transparent hover:text-gray-800 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('orders')}
          >
            Pedidos
          </button>
          <button
            className={`px-6 py-3 font-medium text-base cursor-pointer relative transition-all duration-300 border-b-3 ${
              activeTab === 'products'
                ? 'text-green-500 border-b-4 border-green-500'
                : 'text-gray-600 border-b-4 border-transparent hover:text-gray-800 hover:bg-gray-50'
            }`}
            onClick={() => setActiveTab('products')}
          >
            Productos
          </button>
        </nav>
      </header>

      <main className="p-8">
        {activeTab === 'orders' && <ManagerOrders />}
        {activeTab === 'products' && <ManageProducts />}
      </main>
    </div>
  );
};
