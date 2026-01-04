import { Product } from '@/models/dataModel';
import { getAllProducts } from '@/services/productService';
import { useEffect, useState } from 'react';
import { ItemProduct } from './ItemProduct';
import { CreateProduct } from './CreateProduct';

export const ManageProducts = () => {
  const [catalog, setCatalog] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const fetchCatalog = async () => {
      const data = await getAllProducts();
      setCatalog(data);
    };
    fetchCatalog();
  }, []);

  const fetchCatalog = async () => {
    const data = await getAllProducts();
    setCatalog(data);
  };

  // Filtrar productos por nombre
  const filteredProducts = catalog.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calcular productos para la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Calcular número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Resetear a página 1 cuando cambia la búsqueda o items por página
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, itemsPerPage]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl text-gray-800 mb-6">Gestión de Productos</h2>

      <div className="mb-4">
        <CreateProduct onProductCreated={fetchCatalog} />
      </div>
      {/* Buscador y selector de items por página */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <div className="flex-1 max-w-md">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="itemsPerPage" className="text-gray-700 whitespace-nowrap">
            Items por página:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {currentProducts.map((product) => (
          <ItemProduct key={product.id} product={product} fetchCatalog={fetchCatalog} />
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {filteredProducts.length === 0 && (
        <div className="text-center text-gray-500 py-8">No se encontraron productos</div>
      )}

      {/* Paginador */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Anterior
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg ${
                  currentPage === page
                    ? 'bg-blue-500 text-white'
                    : 'border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};
