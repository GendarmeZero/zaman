import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

// images
import image_honey_con from '../../images/honey-con01.jpg';

// Image data
const images = [
    { src: image_honey_con, alt: "Mobile", label: "Black Honey" },
    { src: image_honey_con, alt: "Tablet", label: "Orange Blossom Honey" },
    { src: image_honey_con, alt: "Laptop", label: "Lavender Honey" },
    { src: image_honey_con, alt: "Desktop", label: "Manuka Honey" },
    { src: image_honey_con, alt: "Monitor", label: "Clover Honey" }
];

function Honey() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleImageClick = () => {
        navigate('/categories');
    };

    const filteredImages = images.filter((image) =>
        image.label.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <section >

            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            {/* Images grid */}
            <div className="images-grid">
                {filteredImages.map((image, index) => (
                    <div key={index} onClick={handleImageClick} style={{ cursor: 'pointer' }}>
                        <img src={image.src} alt={image.alt} />
                        <p>{image.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Honey;
