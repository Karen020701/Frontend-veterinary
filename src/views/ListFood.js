// src/views/ListFood.js

import React, { useEffect, useState } from 'react';
import './styless/ListFood.css';


const ListFood = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3004/clinic/food')
      .then(response => response.json())
      .then(data => setFoodItems(data))
      .catch(error => console.error('Error fetching food:', error));
  }, []);

  return (
    <div className="container">
      <h2>List of Food</h2>
      <ul>
        {foodItems.map((food) => (
          <li key={food.id}>
            {food.description} - {food.type} - ${food.price} - Quantity: {food.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFood;
