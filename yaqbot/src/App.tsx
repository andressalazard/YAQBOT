import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage';
import SigninPage from './components/pages/SigninPage';
import { AuthProvider } from './components/context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signin' element={<SigninPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
