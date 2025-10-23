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
              path="/plant"
              element={
                <ProtectedRoute>
                  <UserPlantsPage />
                </ProtectedRoute>
              }
            />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SettingsProvider>
      </AuthProvider>
    </ToastProvider>
  );
}

export default App;
