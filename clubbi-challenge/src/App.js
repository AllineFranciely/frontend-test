import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Personagens from './pages/Personagens';
import Locais from './pages/Locais';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/personagens" element={<Personagens />} />
          <Route path="/locais" element={<Locais />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
