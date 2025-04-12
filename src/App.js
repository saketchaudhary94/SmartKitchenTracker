import React, { useState, useEffect } from 'react';
import IngredientForm from './components/IngredientForm';
import IngredientList from './components/IngredientList';
import AlertPopup from './components/AlertPopup';
import { addIngredient, deleteIngredient, getAllIngredients } from './utils/hashMapHandler';
import MinHeap from './utils/minHeap';
import './App.css';

const heap = new MinHeap();

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');

  const handleAdd = ({ name, quantity, expiryDate }) => {
    addIngredient(name, quantity, expiryDate);

    const today = new Date();
    const expDate = new Date(expiryDate);
    const daysLeft = (expDate - today) / (1000 * 60 * 60 * 24);

    if (daysLeft <= 0) {
      setAlertMessage(`Ingredient "${name}" has already expired.`);
    } else if (daysLeft <= 3) {
      setAlertMessage(`Ingredient "${name}" is expiring soon!`);
    } else {
      setAlertMessage("");
    }

    refreshData();
  };

  const refreshData = () => {
    const allIngredients = getAllIngredients();

    if (allIngredients && allIngredients.length > 0) {
      const sortedIngredients = [...allIngredients].sort((a, b) =>
        new Date(a.expiryDate) - new Date(b.expiryDate)
      );
      setIngredients(sortedIngredients);
      heap.rebuild(allIngredients);
    } else {
      setIngredients([]);
    }
  };

  const handleDelete = (name) => {
    deleteIngredient(name);
    refreshData();
  };

  useEffect(() => {
    refreshData();
  }, []);

  return (
    <div className="App">
      <h1>Smart Kitchen Tracker</h1>
      <IngredientForm onAdd={handleAdd} />
      <IngredientList ingredients={ingredients} onDelete={handleDelete} />
      {alertMessage && <AlertPopup message={alertMessage} onClose={() => setAlertMessage('')} />}
    </div>
  );
};

export default App;
