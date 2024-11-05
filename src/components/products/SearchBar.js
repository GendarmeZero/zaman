import React from 'react';

function SearchBar({ value, onChange }) {
    return (
        <input
            className="search-bar"
            type="text"
            placeholder="Search by name..."
            value={value}
            onChange={(e) => onChange(e.target.value)}

        />
    );
}

export default SearchBar;
