// src/views/Welcome.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styless/Welcome.css';

const Welcome = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <h2>Welcome to the Vet Clinic</h2>
      <div className="button-container">
        <button onClick={() => handleNavigate('/create-accessories')}>Create Accessories</button>
        <button onClick={() => handleNavigate('/create-food')}>Create Food</button>
        <button onClick={() => handleNavigate('/list-food')}>List Food</button> {/* Nuevo botón */}
      </div>
    </div>
  );
};

export default Welcome;
