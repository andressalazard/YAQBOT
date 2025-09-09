import './App.css';
import { Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage';
import SigninPage from './components/pages/SigninPage';
import { AuthProvider } from './components/context/AuthContext';
import { SettingsProvider } from './components/context/SettingsContext';
import { AlertProvider } from './components/context/AlertContext';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <AlertProvider>
        <SettingsProvider>
          <Routes>
            <Route
              path='/home'
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signin' element={<SigninPage />} />
          </Routes>
        </SettingsProvider>
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
