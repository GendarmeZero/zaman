import React from 'react';

import './cat.css';
import '../land/landImgaes.css'

import HoneyJar from '../../images/honey-jar02.jpg';
import JarHeader from '../../images/types-of-honey_header.png';
import splash01 from '../../images/honey-slpash-01.png';
import beeFly from '../../images/bee-fly.png';


import {useNavigate} from "react-router-dom";

const images = [
  { src: HoneyJar, alt: "Mobile", label: "Honey#1" },
  { src: HoneyJar, alt: "Tablet", label: "Honey#2" },
  { src: HoneyJar, alt: "Laptop", label: "Honey#3" },
  { src: HoneyJar, alt: "Desktop", label: "Honey#4" },
];

const App = () => {
  const navigate = useNavigate();
  const handleImageClick = () => {
    navigate('/categories');
  };
  return (

      <div className="app-container">
          <img className="JarHeader" src={JarHeader} alt="header"/>
          <img className="splash-02" src={splash01} alt="splash"/>


          <main className="app-main-content">

              <section className="category-section">
                  <h2 className="section-title">Top Categories</h2>
                  <img className="beefly" src={beeFly} alt="beefly"/>
                  <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
                      blandit massa enim. Nullam nunc varius.</p>
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
