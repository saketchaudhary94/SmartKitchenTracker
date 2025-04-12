import React from 'react';

const IngredientList = ({ ingredients, onDelete }) => {
  const today = new Date().toISOString().split('T')[0];

  return (
    <div>
      <h3 style={{ textAlign: 'center', margin: '20px 0' }}>📋 Ingredient Inventory</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {ingredients.map((item, index) => {
          const isExpired = new Date(item.expiryDate) <= new Date(today);
          const isExpiringSoon =
            new Date(item.expiryDate) <= new Date(new Date().setDate(new Date().getDate() + 2)) &&
            !isExpired;

          let statusColor = '#d4edda';
          let statusText = '✅ Fresh';

          if (isExpired) {
            statusColor = '#f8d7da';
            statusText = '❌ Expired';
          } else if (isExpiringSoon) {
            statusColor = '#fff3cd';
            statusText = '⏳ Expiring Soon';
          }

          return (
            <div
              key={index}
              style={{
                backgroundColor: statusColor,
                padding: '15px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                minWidth: '250px',
              }}
            >
              <h4>{item.name}</h4>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Expiry Date:</strong> {item.expiryDate}</p>
              <p style={{ fontWeight: 'bold' }}>{statusText}</p>
              <button
                onClick={() => onDelete(item.name)}
                style={{
                  marginTop: '10px',
                  padding: '5px 10px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                🗑️ Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IngredientList; 