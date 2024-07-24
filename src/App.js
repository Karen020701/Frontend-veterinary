// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Welcome from './views/Welcome';
import CreateAccessories from './views/CreateAccesories';
import CreateFood from './views/CreateFood';
import ListFood from './views/ListFood'; // Importar la nueva vista
import './App.css';

const App = () => {
  return (
    <div>
      <header>Vet Clinic</header>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/create-accessories" element={<CreateAccessories />} />
          <Route path="/create-food" element={<CreateFood />} />
          <Route path="/list-food" element={<ListFood />} /> {/* Nueva ruta */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
