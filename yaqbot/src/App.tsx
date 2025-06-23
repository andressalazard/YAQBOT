import { useState } from 'react';
import './App.css';
// import UserCard from './components/molecules/UserCard/UserCard';

import HomePage from './components/pages/HomePage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
