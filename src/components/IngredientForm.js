import React, { useState } from 'react';

const IngredientForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('g');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ name, quantity: `${quantity}${unit}`, expiryDate });
    setName('');
    setQuantity('');
    setExpiryDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ingredient" required />
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Quantity" required />
      <select value={unit} onChange={(e) => setUnit(e.target.value)} required>
        <option value="g">g (grams)</option>
        <option value="kg">kg (kilograms)</option>
        <option value="ml">ml (millilitres)</option>
        <option value="L">L (litres)</option>
        <option value="pcs">pcs (pieces)</option>
      </select>
      <input type="date" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />
      <button type="submit">Add Ingredient</button>
    </form>
  );
};

export default IngredientForm;
