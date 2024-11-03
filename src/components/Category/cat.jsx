import React from 'react';



import './cat.css'; 
import Imggg from '../../images/h1.jpg';
import {useNavigate} from "react-router-dom";

const images = [
  { src: Imggg, alt: "Mobile", label: "Mobile" },
  { src: Imggg, alt: "Tablet", label: "Tablet" },
  { src: Imggg, alt: "Laptop", label: "Laptop" },
  { src: Imggg, alt: "Desktop", label: "Desktop" },
  { src: Imggg, alt: "Monitor", label: "Monitor" }
];

const App = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate('/categories');
  };
  return (
<div className="app-container">
  <main className="app-main-content">

    <section className="category-section">
      <h2 className="section-title">Top Categories</h2>
      <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam nunc varius.</p>
    </section>


  <section className="grid-wrapper">
      <div className="images-grid">
        {images.map((image, index) => (
            <div key={index} onClick={handleImageClick} style={{cursor: 'pointer'}}>
              <img src={image.src} alt={image.alt}/>
              <p>{image.label}</p>
            </div>
        ))}
      </div>
    </section>

    </main>
</div>

  );
};

export default App;
