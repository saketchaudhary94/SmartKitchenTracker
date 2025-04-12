import React from 'react';

const SoonExpiring = ({ items }) => {
  return (
    <div>
      <h3>Soon Expiring Ingredients</h3>
      <ul>
        {items.map((item, idx) => (
          <li key={idx}>
            {item.name} - Expires on: {item.expiryDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoonExpiring;
