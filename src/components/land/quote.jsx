import React from 'react';
import Imagesakf from '../../images/qoute-header.jpg';
import './land.css'; 

function App() {
  return (
    <div className="containeres">
      <div className="image-containeres">
        <img src={Imagesakf} alt="Imagetest" />
        <div className="overlayes">
          <h3>Bexar give the smart solution</h3>
          <h3>for your business</h3>
          <button>Read more</button>
        </div>
      </div>
    </div>

  );
}

export default App;
