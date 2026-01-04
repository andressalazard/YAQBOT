import { useToast } from '@/components/context/ToastContext';
import { Product } from '@/models/dataModel';
import { updatePhoto, updateProduct } from '@/services/productService';
import { useState } from 'react';

export const ItemProduct = ({
  product,
  fetchCatalog,
}: {
  product: Product;
  fetchCatalog: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    stock: product.stock,
    category: product.category,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'price' || name === 'stock' ? Number(value) : value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoader(true);
      // Aquí puedes agregar la lógica para actualizar el producto
      console.log('Form data:', formData);
      console.log('Image file:', imageFile);
      const response = await updateProduct(formData as Product);
      console.log('Product updated successfully:', response);
      if (imageFile) {
        await updatePhoto(formData.id, imageFile);
      }
      if (response) {
        addToast('Producto actualizado correctamente', 'success');
      } else {
        addToast('Error al actualizar el producto', 'error');
      }
    } catch (error) {
      //console.error('Error updating product:', error);
      addToast('Error al actualizar el producto', 'error');
    } finally {
      setLoader(false);
      setIsModalOpen(false);
      fetchCatalog();
    }
  };

  return (
    <>
      <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        {product.image && product.image.length > 0 && (
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full h-48 object-cover mb-4 rounded"
          />
        )}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Editar
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Editar Producto</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              {loader && <p>Loading...</p>}
              <form onSubmit={handleSubmit}>
                <input type="hidden" name="id" value={formData.id} />

                {/* Nombre */}
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Descripción */}
                <div className="mb-4">
                  <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">
                    Descripción
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Precio y Stock en la misma fila */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="price" className="block text-gray-700 font-semibold mb-2">
                      Precio
                    </label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      step="0.01"
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="stock" className="block text-gray-700 font-semibold mb-2">
                      Stock
                    </label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleInputChange}
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                {/* Categoría */}
                <div className="mb-4">
                  <label htmlFor="category" className="block text-gray-700 font-semibold mb-2">
                    Categoría
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="PLANT">Planta</option>
                    <option value="FERTILIZER">Fertilizante</option>
                    <option value="FLOWERPOT">Maceta</option>
                    <option value="TOOL">Herramienta</option>
                    <option value="OTHER">Otro</option>
                  </select>
                </div>

                {/* Imagen actual */}
                {product.image && product.image.length > 0 && (
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Imagen actual</label>
                    <img
                      src={product.image[0]}
                      alt={product.name}
                      className="w-32 h-32 object-cover rounded border border-gray-300"
                    />
                  </div>
                )}

                {/* Subir nueva imagen */}
                <div className="mb-6">
                  <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                    Cambiar imagen
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Botones */}
                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                    Guardar cambios
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
