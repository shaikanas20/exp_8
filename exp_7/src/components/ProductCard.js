// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ name, price, status }) => {
  return (
    <div style={{ 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      padding: '20px', 
      margin: '10px',
      width: '200px',
      textAlign: 'center'
    }}>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default ProductCard;
