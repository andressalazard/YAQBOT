import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // usa localStorage
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import userReducer from '../features/user/userSlice';
import productReducer from '../features/product/productSlice';
import authAdminReducer from '../features/authAdmin/authAdminSlice';

// Configuración de persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'productCart', 'user', 'authAdmin'], // persitencia de estos reducers
  // blacklist: ['user'], // si quieres excluir alguno
};

// Combinar reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  productCart: productReducer,
  authAdmin: authAdminReducer,
});

// Crear el reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora las acciones de redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
