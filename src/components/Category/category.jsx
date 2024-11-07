import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../land/footer';
import Honey from '../products/honey';
import ProductFilter from '../Filters/ProductFilter';
import image_honey_con from '../../images/honey-con01.jpg';

// Product data with tags
const products = [
    { id: 1, label: "Black Honey", price: 10, src: image_honey_con, tags: ["Black Honey"] },
    { id: 2, label: "Orange Blossom Honey", price: 15, src: image_honey_con, tags: ["Orange Blossom Honey"] },
    { id: 3, label: "Lavender Honey", price: 20, src: image_honey_con, tags: ["Lavender Honey"] },
    { id: 4, label: "Manuka Honey", price: 25, src: image_honey_con, tags: ["Manuka Honey"] },
];

export default function Category(props) {
    const [filteredProducts, setFilteredProducts] = useState(products);

    const handleFilterChange = (filters) => {
        let filtered = products;

        // Apply name filter
        if (filters.name) {
            filtered = filtered.filter((product) =>
                product.label.toLowerCase().includes(filters.name.toLowerCase())
            );
        }

        // Apply min price filter
        if (filters.minPrice) {
            filtered = filtered.filter((product) => product.price >= Number(filters.minPrice));
        }

        // Apply max price filter
        if (filters.maxPrice) {
            filtered = filtered.filter((product) => product.price <= Number(filters.maxPrice));
        }

        // Apply tag filter
        if (filters.tags && filters.tags.length > 0) {
            filtered = filtered.filter((product) =>
                filters.tags.some((tag) => product.tags.includes(tag))
            );
        }

        setFilteredProducts(filtered);
    };

    return (
        <div>
            <Header />


            <ProductFilter onFilterChange={handleFilterChange} />

            <Honey products={filteredProducts} />

            <Footer />
        </div>
    );
}
