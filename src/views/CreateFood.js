import React, { useState } from 'react';
import './styless/CreateFood.css';

const CreateFood = () => {
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [food, setFood] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3003/clinic/food', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description, type, price, quantity })
    });

    const data = await response.json();
    if (response.status === 200) {
      alert('Food created successfully!');
    } else {
      alert(data.message);
    }
  };

  const handleGetFood = async () => {
    const response = await fetch('http://localhost:3004/clinic/food');
    const data = await response.json();
    if (response.ok) {
      setFood(data);
    } else {
      alert('Failed to fetch food');
    }
  };

  return (
    <div className="container">
      <h2>Create Food</h2>
      <form onSubmit={handleSubmit}>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="submit">Create Food</button>
        <button type="button" onClick={handleGetFood}>List Food</button>
      </form>
      <div>
        <h3>Food List</h3>
        <ul>
          {food.map((item) => (
            <li key={item.id}>{item.description} - {item.type} - ${item.price} - {item.quantity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateFood;
