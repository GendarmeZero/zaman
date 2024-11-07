import React, { useState } from 'react';

const HoneyFilter = ({ onFilterChange }) => {
    // State for each filter category
    const [priceRange, setPriceRange] = useState([1, 100]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [organic, setOrganic] = useState(false);
    const [raw, setRaw] = useState(false);
    const [honeyType, setHoneyType] = useState('');

    // Sample data for brands and types
    const brands = ['Brand A', 'Brand B', 'Brand C', 'Local Farmers'];
    const honeyTypes = ['Clover', 'Manuka', 'Wildflower', 'Acacia'];

    // Handle price range change
    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPriceRange((prev) => (name === 'min' ? [Number(value), prev[1]] : [prev[0], Number(value)]));
        onFilterChange({ priceRange, selectedBrands, organic, raw, honeyType });
    };

    // Handle brand selection
    const handleBrandChange = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
        );
        onFilterChange({ priceRange, selectedBrands, organic, raw, honeyType });
    };

    return (
        <div className="filter-sidebar">
            {/* Price Filter */}
            <div className="filter-section">
                <h4>Price</h4>
                <input
                    type="number"
                    name="min"
                    value={priceRange[0]}
                    min="1"
                    max="100"
                    onChange={handlePriceChange}
                />
                <span> - </span>
                <input
                    type="number"
                    name="max"
                    value={priceRange[1]}
                    min="1"
                    max="100"
                    onChange={handlePriceChange}
                />
            </div>

            {/* Brand Filter */}
            <div className="filter-section">
                <h4>Brands</h4>
                {brands.map((brand) => (
                    <label key={brand}>
                        <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                        />
                        {brand}
                    </label>
                ))}
            </div>

            {/* Organic Filter */}
            <div className="filter-section">
                <h4>Organic</h4>
                <label>
                    <input
                        type="checkbox"
                        checked={organic}
                        onChange={() => setOrganic(!organic)}
                    />
                    Organic
                </label>
            </div>

            {/* Raw Filter */}
            <div className="filter-section">
                <h4>Raw</h4>
                <label>
                    <input
                        type="checkbox"
                        checked={raw}
                        onChange={() => setRaw(!raw)}
                    />
                    Raw
                </label>
            </div>

            {/* Honey Type Filter */}
            <div className="filter-section">
                <h4>Honey Type</h4>
                <select value={honeyType} onChange={(e) => setHoneyType(e.target.value)}>
                    <option value="">All</option>
                    {honeyTypes.map((type) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            {/* Reset Filters */}
            <button onClick={() => {
                setPriceRange([1, 100]);
                setSelectedBrands([]);
                setOrganic(false);
                setRaw(false);
                setHoneyType('');
                onFilterChange({});
            }}>
                Reset All
            </button>
        </div>
    );
};

export default HoneyFilter;
