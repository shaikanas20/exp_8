import React from 'react';

const Book = ({ title, author, onRemove }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid #ccc',
      padding: '10px',
      margin: '5px',
      borderRadius: '4px'
    }}>
      <span><strong>{title}</strong> by {author}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default Book;
