import { useState } from 'react';
import './App.css';
// import UserCard from './components/molecules/UserCard/UserCard';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage /> */}
      <LoginPage />
    </>
  );
}

export default App;
