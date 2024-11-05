import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

// images
import image_honey_con from '../../images/honey-con01.jpg';
import CatHeader from '../../images/honey-header.jpeg';

//CSS
import '../land/landImgaes.css'
import '../products/products-css/honey.css'

// Image data
const images = [
    { src: image_honey_con, alt: "Mobile", label: "Black Honey" },
    { src: image_honey_con, alt: "Tablet", label: "Orange Blossom Honey" },
    { src: image_honey_con, alt: "Laptop", label: "Lavender Honey" },
    { src: image_honey_con, alt: "Desktop", label: "Manuka Honey" },
    { src: image_honey_con, alt: "Monitor", label: "Clover Honey" },
    { src: image_honey_con, alt: "Device", label: "Wildflower Honey" },
    { src: image_honey_con, alt: "Smartphone", label: "Buckwheat Honey" },
    { src: image_honey_con, alt: "Screen", label: "Eucalyptus Honey" },
    { src: image_honey_con, alt: "Phone", label: "Sage Honey" },
    { src: image_honey_con, alt: "Camera", label: "Acacia Honey" },
    { src: image_honey_con, alt: "Headset", label: "Tupelo Honey" },
    { src: image_honey_con, alt: "Keyboard", label: "Blueberry Honey" },
    { src: image_honey_con, alt: "Mouse", label: "Fireweed Honey" },
    { src: image_honey_con, alt: "Printer", label: "Raspberry Honey" },
    { src: image_honey_con, alt: "Speaker", label: "Borage Honey" },
    { src: image_honey_con, alt: "Laptop", label: "Dandelion Honey" },
    { src: image_honey_con, alt: "Gadget", label: "Sunflower Honey" },
    { src: image_honey_con, alt: "Tablet", label: "Heather Honey" },
    { src: image_honey_con, alt: "Projector", label: "Sourwood Honey" },
    { src: image_honey_con, alt: "Drone", label: "Pine Honey" }
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
        <section className="app-container">
            <img className="CatHeader" src={CatHeader} alt="header"/>
            <div className="SearchBar-container">
                <SearchBar value={searchQuery} onChange={setSearchQuery}/>
            </div>

            <main className="app-main-content">
                <div className="images-grid">
                    {filteredImages.map((image, index) => (
                        <div key={index} onClick={handleImageClick} style={{cursor: 'pointer'}}>
                            <img src={image.src} alt={image.alt}/>
                            <p>{image.label}</p>
                        </div>
                    ))}
                </div>

            </main>
        </section>
    );
}

export default Honey;
