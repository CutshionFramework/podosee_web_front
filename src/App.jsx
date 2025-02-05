import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Main from './pages/main/main';
import Jaka from './pages/jaka';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/jaka' element={<Jaka />} />
      </Routes>
    </>
  );
}

export default App;
