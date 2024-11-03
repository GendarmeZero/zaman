import React from 'react'

import Header from '../Header/Header'
import Footer from '../land/footer'

// import '../products/products-css/honey.css'

import Honey from "../products/honey";



export default function Category(props) {
    return (
        <div>

            <Header  />
            <Honey />
            <Footer />

        </div>
    );
}
