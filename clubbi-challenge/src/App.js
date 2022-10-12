import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Personagens from './pages/Personagens';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/personagens" element={<Personagens />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
