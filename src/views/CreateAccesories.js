import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styless/CreateAccesories.css';

const CreateAccessories = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3007/clinic/accessories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, type, price, quantity })
    });

    const data = await response.json();
    if (response.status === 200) {
      alert('Accessory created successfully!');
    } else {
      alert(data.message);
    }
  };

  const handleGetAccessories = async () => {
    const response = await fetch('http://localhost:3007/clinic/accessories');
    const data = await response.json();
    if (response.ok) {
      setAccessories(data);
    } else {
      alert('Failed to fetch accessories');
    }
  };

  return (
    <div className="container">
      <h2>Create Accessories</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <label>Type:</label>
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
        <label>Price:</label>
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        <button type="submit">Create Accessory</button>
        <button type="button" className="secondary" onClick={() => navigate('/create-food')}>Go to Create Food</button>
        <button type="button" onClick={handleGetAccessories}>List Accessories</button>
      </form>
      <div>
        <h3>Accessories List</h3>
        <ul>
          {accessories.map((accessory) => (
            <li key={accessory.id}>{accessory.name} - {accessory.type} - ${accessory.price} - {accessory.quantity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CreateAccessories;
