import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ProductProps {
  id: string;
  category: string;
  name: string;
  price: number;
  rate?: number;
  image: string[];
}

// Interfaz para items en el carrito (extiende la info del producto)
export interface CartItem {
  product: ProductProps;
  quantity: number;
  totalPrice: number;
}

const productSlice = createSlice({
  name: 'product-cart',
  initialState: {
    products: [] as CartItem[],
  },
  reducers: {
    // Agregar producto al carrito
    addProduct: (state, action: PayloadAction<ProductProps>) => {
      const product = action.payload;
      const existingItem = state.products.find((item) => item.product.id === product.id);

      if (existingItem) {
        // Si ya existe, aumenta la cantidad
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * product.price;
      } else {
        // Si no existe, agrégalo con cantidad 1
        state.products.push({
          product,
          quantity: 1,
          totalPrice: product.price,
        });
      }
    },

    // Remover producto del carrito
    removeProduct: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter((item) => item.product.id !== action.payload);
    },

    // Actualizar cantidad de un producto
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      const item = state.products.find((item) => item.product.id === productId);

      if (item && quantity > 0) {
        item.quantity = quantity;
        item.totalPrice = quantity * item.product.price;
      } else if (item && quantity <= 0) {
        // Si la cantidad es 0 o negativa, elimina el producto
        state.products = state.products.filter((item) => item.product.id !== productId);
      }
    },

    // Limpiar carrito
    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addProduct, removeProduct, updateQuantity, clearCart } = productSlice.actions;
export default productSlice.reducer;
