import React, { useState } from 'react';

//CSS
import './filter.css'

const tags = [
    "Black Honey", "Orange Blossom Honey", "Lavender Honey", "Manuka Honey", "Clover Honey",
    "Wildflower Honey", "Buckwheat Honey", "Eucalyptus Honey", "Sage Honey", "Acacia Honey"
]; // Add more tags as needed

const ProductFilter = ({ onFilterChange }) => {
    const [name, setName] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);

    const handleTagChange = (tag) => {
        setSelectedTags((prevSelectedTags) =>
            prevSelectedTags.includes(tag)
                ? prevSelectedTags.filter((t) => t !== tag)
                : [...prevSelectedTags, tag]
        );
    };

    const applyFilters = () => {
        onFilterChange({ name, minPrice, maxPrice, tags: selectedTags });
    };

    return (
        <div className="product-filter container my-5 product-container">
            <div className="card shadow-sm p-4 border-primary">
                <h4 className="card-title text-center text-uppercase mb-4">Filter Products</h4>
                <form className="row gy-3">
                    {/* Filter by name */}
                    <div className="col-md-6 col-lg-4">
                        <label htmlFor="name" className="form-label">Product Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Search by name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    {/* Filter by min price */}
                    <div className="col-md-6 col-lg-4">
                        <label htmlFor="minPrice" className="form-label">Min Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="minPrice"
                            placeholder="0"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                    </div>

                    {/* Filter by max price */}
                    <div className="col-md-6 col-lg-4">
                        <label htmlFor="maxPrice" className="form-label">Max Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="maxPrice"
                            placeholder="100"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>

                    {/* Filter by tags */}
                    <div className="col-12 mt-3">
                        <label className="form-label">Tags</label>
                        <div className="d-flex flex-wrap">
                            {tags.map((tag) => (
                                <div key={tag} className="form-check me-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={tag}
                                        checked={selectedTags.includes(tag)}
                                        onChange={() => handleTagChange(tag)}
                                    />
                                    <label className="form-check-label" htmlFor={tag}>
                                        {tag}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Apply Filters Button */}
                    <div className="col-12 mt-4 text-center ">
                        <button
                            type="button"
                            className="btn btn-primary px-4 py-2 btn-lg bt-filter"
                            onClick={applyFilters}
                        >
                            Apply Filters
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductFilter;
