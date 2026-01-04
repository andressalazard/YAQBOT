import { useToast } from '@/components/context/ToastContext';
import { ProductCategory } from '@/models/dataModel';
import { createProduct, updatePhoto } from '@/services/productService';
import { useState } from 'react';

interface CreateProductProps {
  onProductCreated: () => void;
}

export const CreateProduct = ({ onProductCreated }: CreateProductProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    category: 'PLANT' as ProductCategory,
  });
  const [plantData, setPlantData] = useState({
    plantType: '',
    maxHeight: 0,
    wateringFrequency: 0,
    wateringMode: 'MODERATE',
    weather: [] as string[],
    light: 'PARTIAL_LIGHT',
    specialCares: '',
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

  const handlePlantInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPlantData((prev) => ({
      ...prev,
      [name]: name === 'maxHeight' || name === 'wateringFrequency' ? Number(value) : value,
    }));
  };

  const handleWeatherChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setPlantData((prev) => ({
      ...prev,
      weather: selectedOptions,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log();
    /*
    try {
      setLoader(true);

      addToast('Producto creado correctamente', 'success');
      
      const res = await createProduct(formData);
      console.log('Producto creado:', res);
      if (res.id && imageFile) {
        await updatePhoto(res.id, imageFile);
      }
      // Resetear el formulario
      setFormData({
        name: '',
        description: '',
        price: 0,
        stock: 0,
        category: 'PLANT' as ProductCategory,
      });
      setImageFile(null);

      onProductCreated();
    } catch (error) {
      addToast('Error al crear el producto', 'error');
    } finally {
      setIsModalOpen(false);
      setLoader(false);
    }
      */
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-300 font-semibold"
      >
        + Crear Producto
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Crear Nuevo Producto</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              {loader && (
                <div className="mb-4 text-center">
                  <p className="text-gray-600">Creando producto...</p>
                </div>
              )}
              <form onSubmit={handleSubmit}>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  >
                    <option value="PLANT">Planta</option>
                    <option value="FERTILIZER">Fertilizante</option>
                    <option value="FLOWERPOT">Maceta</option>
                    <option value="TOOL">Herramienta</option>
                    <option value="OTHER">Otro</option>
                  </select>
                </div>

                {/* Formulario adicional para plantas */}
                {formData.category === 'PLANT' && (
                  <div className="border-t pt-6 mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">
                      Información de la Planta
                    </h3>

                    {/* Tipo de planta */}
                    <div className="mb-4">
                      <label htmlFor="plantType" className="block text-gray-700 font-semibold mb-2">
                        Tipo de planta
                      </label>
                      <input
                        type="text"
                        id="plantType"
                        name="plantType"
                        value={plantData.plantType}
                        onChange={handlePlantInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>

                    {/* Altura máxima y Frecuencia de riego */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label
                          htmlFor="maxHeight"
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          Altura máxima (cm)
                        </label>
                        <input
                          type="number"
                          id="maxHeight"
                          name="maxHeight"
                          value={plantData.maxHeight}
                          onChange={handlePlantInputChange}
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="wateringFrequency"
                          className="block text-gray-700 font-semibold mb-2"
                        >
                          Frecuencia de riego (días)
                        </label>
                        <input
                          type="number"
                          id="wateringFrequency"
                          name="wateringFrequency"
                          value={plantData.wateringFrequency}
                          onChange={handlePlantInputChange}
                          min="0"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Modo de riego */}
                    <div className="mb-4">
                      <label
                        htmlFor="wateringMode"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Modo de riego
                      </label>
                      <select
                        id="wateringMode"
                        name="wateringMode"
                        value={plantData.wateringMode}
                        onChange={handlePlantInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="HIGH">Alto</option>
                        <option value="MODERATE">Moderado</option>
                        <option value="LOW">Bajo</option>
                      </select>
                    </div>

                    {/* Clima */}
                    <div className="mb-4">
                      <label htmlFor="weather" className="block text-gray-700 font-semibold mb-2">
                        Clima (mantén presionado Ctrl/Cmd para seleccionar múltiples)
                      </label>
                      <select
                        id="weather"
                        name="weather"
                        multiple
                        value={plantData.weather}
                        onChange={handleWeatherChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
                        required
                      >
                        <option value="CLEAR">Despejado</option>
                        <option value="CLOUDY">Nublado</option>
                        <option value="PARTIALLY_CLOUDLY">Parcialmente nublado</option>
                        <option value="OVERCAST">Cubierto</option>
                        <option value="GLOOMY">Sombrío</option>
                        <option value="BRIGHT">Brillante</option>
                        <option value="DARK">Oscuro</option>
                        <option value="FOGGY">Brumoso</option>
                        <option value="MISTY">Neblinoso</option>
                        <option value="HAZY">Brumoso</option>
                        <option value="DAMP">Húmedo</option>
                      </select>
                    </div>

                    {/* Luz */}
                    <div className="mb-4">
                      <label htmlFor="light" className="block text-gray-700 font-semibold mb-2">
                        Tipo de luz
                      </label>
                      <select
                        id="light"
                        name="light"
                        value={plantData.light}
                        onChange={handlePlantInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      >
                        <option value="FULL_SUNLIGHT">Luz solar completa</option>
                        <option value="PARTIAL_LIGHT">Luz parcial</option>
                        <option value="INDIRECT_SUNLIGHT">Luz solar indirecta</option>
                        <option value="DAPPLED_LIGHT">Luz moteada</option>
                        <option value="SHADE">Sombra</option>
                      </select>
                    </div>

                    {/* Cuidados especiales */}
                    <div className="mb-4">
                      <label
                        htmlFor="specialCares"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Cuidados especiales
                      </label>
                      <textarea
                        id="specialCares"
                        name="specialCares"
                        value={plantData.specialCares}
                        onChange={handlePlantInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Subir imagen */}
                <div className="mb-6">
                  <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
                    Imagen del producto
                  </label>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                  {imageFile && (
                    <p className="mt-2 text-sm text-gray-600">
                      Archivo seleccionado: {imageFile.name}
                    </p>
                  )}
                </div>

                {/* Botones */}
                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setIsModalOpen(false);
                      setFormData({
                        name: '',
                        description: '',
                        price: 0,
                        stock: 0,
                        category: 'PLANT' as ProductCategory,
                      });
                      setImageFile(null);
                    }}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    disabled={loader}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={loader}
                  >
                    {loader ? 'Creando...' : 'Crear Producto'}
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
