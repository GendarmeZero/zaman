import React from 'react'
import Swiper from './swiper';

//CSS
import './land.css'

//Images
import './landImgaes.css'
import Bee from '../../images/bee.png'

const values = [
  { number: '01', title: 'Our Mission', description: 'We aim at understanding and caring for patients and colleagues\' needs and wants, by attentive listening and putting ourselves in people’s shoes.' },
  { number: '02', title: 'Vission', description: 'We aim at understanding and caring for patients and colleagues\' needs and wants, by attentive listening and putting ourselves in people’s shoes.' },
  { number: '03', title: 'Our Approach', description: 'We aim at understanding and caring for patients and colleagues\' needs and wants, by attentive listening and putting ourselves in people’s shoes.' }
];


export default function about() {
  return (


<div className='ttt'>

  <section className="about_dr">
    <div className="main_dr">
      <div className="all-text">
        <h4> What we are </h4>
        <h1>We are dynamic team of creative people</h1>
        <p>
          Discover the richness of authentic honey with Zaman. Our honey is harvested from pristine environments,
          ensuring the highest quality and flavor. Enjoy the natural sweetness and health benefits in every jar.
        </p>
        <div className="btn_dr">
          <a href=""/>
          <button type="button" className="btn2">
            {" "}
            Browse Products {" "}
            <img className="bee-01" src={Bee} alt="Bee"/>
          </button>

        </div>
      </div>
      <Swiper/>


    </div>
  </section>

  <div className="value">
    {values.map((value, index) => (
          <div className="product" key={index}>
            <span className="number">{value.number}</span>
            <h3>{value.title}</h3>
            <div>
            <p>{value.description}</p>
            </div>
          </div>

        ))}

  </div>

</div>
  )
}