import React from 'react';

function SearchBar({ setSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search coin..."
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: '10px',
          width: '100%',
          marginBottom: '20px',
          fontSize: '16px'
        }}
      />
    </div>
  );
}

export default SearchBar;
