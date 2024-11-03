import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import About from './about'
import Vission from './vission'
import ScrollToTop from '../../pages/scrollToTop'
import Testimonials from './test'
import Footer from './footer'
import Category from '../Category/cat'
import Quote from './quote'
// import SampleComponent from '../sample'
import Services from '../services/services'
// import Seller from '../Seller/seller'
import Testttt from '../Test/testttt'

import './land.css'



export default function land() {
  return (
    <div>

    <Header  />
    <Main  />
    <About  />
    <Services  />
    <Quote  />
    <Vission  />
    <Category  />
    {/*<Testttt  />*/}
        <Testimonials  />
        <ScrollToTop  />
        <Footer  />
    </div>
  )
}
