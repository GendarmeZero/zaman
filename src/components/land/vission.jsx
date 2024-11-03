import React from 'react'
import Img1 from '../../images/h1.jpg';
import Img2 from '../../images/h1.jpg';
import './land.css'

export default function vission() {
  return (
    <div>
    <div className="vission">
  <div className="vission_name">
    <h3>
      {" "}
      VISION & MISSION
    </h3>
  </div>
  <div className="vission_body">
    <div className="mission1">
      <div className="part1">
        <h2> VISION </h2>
        <p> To be the epitome of excellence in honey production and innovation.</p>
      </div>
      <div className="part2">
        <h2> MISSION </h2>
        <p>
          We strive to offer pure and high-quality honey products in a welcoming and environmentally conscious setting. Our dedicated team is committed to continually enhancing their expertise, serving our community through educational initiatives about the benefits and uses of honey.
          <br /> <br />
          The design of our facility is meticulously crafted, with carefully chosen colors, glass surfaces, and lighting to ensure a remarkable and serene experience.
          <br /> <br />
          We are dedicated to providing top-notch honey products with care and passion. We offer a wide range of solutions for our customers’ honey needs, believing in the power of listening. We take the time to understand their preferences and provide solutions that turn their culinary and wellness goals into something sweet, wholesome, and delightful.
        </p>
      </div>
    </div>
    <div className="mission2">
      <div className="img one">
        <img src={Img1} alt="test1" />
      </div>
      <div className="img three">
        <img src={Img1} alt="test1" className='threee'/>
      </div>
      <div />
      <div className="img two">
        <img src={Img2} alt="test2" />
      </div>
    </div>
  </div>
</div>

    
    
    </div>
  )
}
