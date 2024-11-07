import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import CatHeader from '../../images/honey-header.jpeg';
import '../land/landImgaes.css';
import '../products/products-css/honey.css';

function Honey({ products }) {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/categories');
    };

    // Apply search query filter on top of other filters
    const filteredProducts = products.filter((product) =>
        product.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section className="app-container">
            <img className="CatHeader" src={CatHeader} alt="header"/>
            <div className="SearchBar-container">
                <SearchBar value={searchQuery} onChange={setSearchQuery}/>
            </div>

            <main className="app-main-content">
                <div className="images-grid">
                    {filteredProducts.map((product, index) => (
                        <div key={index} onClick={handleImageClick} style={{cursor: 'pointer'}}>
                            <img src={product.src} alt={product.label}/>
                            <p>{product.label} - ${product.price}</p>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}

export default Honey;
