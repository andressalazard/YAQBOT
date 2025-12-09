import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SigninPage from './components/pages/SigninPage';
import { AuthProvider } from './components/context/AuthContext';
import { SettingsProvider } from './components/context/SettingsContext';

import ProtectedRoute from './routes/ProtectedRoute';
import ProfilePage from './components/pages/ProfilePage';
import { ToastProvider } from './components/context/ToastContext';
import NotFoundPage from './components/pages/NotFoundPage';
import MarketPlacePage from './components/pages/MarketPlacePage';
import { ProductProvider } from './components/context/ProductContext';
import UserPlantsPage from './components/pages/UserPlantsPage';
import { ForgotPasswordPage } from './components/pages/ForgotPasswordPage';
import { ResetPasswordPage } from './components/pages/ResetPasswordPage';
import PlantDetailsPage from './components/pages/PlantDetailPage';
import { CartPage } from './components/pages/CartPage';
import { PayPage } from './components/pages/PayPage';
import { OrdersPage } from './components/pages/OrdersPage';
import LoginAdminPage from './components/pages/LoginAdminPage';
import { IndexPage } from './components/pages/IndexPage';

function App() {
  return (
    <ToastProvider>
      <AuthProvider>
        <SettingsProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketplace"
              element={
                <ProtectedRoute>
                  <ProductProvider>
                    <MarketPlacePage />
                  </ProductProvider>
                </ProtectedRoute>
              }
            />

            <Route
              path="/compras"
              element={
                <ProtectedRoute>
                  <OrdersPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/cart"
              element={
                <ProtectedRoute>
                  <CartPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/pay-cart"
              element={
                <ProtectedRoute>
                  <PayPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/plant"
              element={
                <ProtectedRoute>
                  <UserPlantsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/plant/:plantid"
              element={
                <ProtectedRoute>
                  <PlantDetailsPage />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<LoginAdminPage />} />
            <Route path="/register" element={<SigninPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/" element={<IndexPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SettingsProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
