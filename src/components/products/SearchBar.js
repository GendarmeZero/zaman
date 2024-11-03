import React from 'react';

function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search by name..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            style={{
                padding: '8px',
                marginBottom: '20px',
                width: '100%',
                boxSizing: 'border-box'
            }}
        />
    );
}

export default SearchBar;
