import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage';
import SigninPage from './components/pages/SigninPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
