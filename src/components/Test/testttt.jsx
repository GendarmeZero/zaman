import React from 'react';
import './testttt.css'; 

const productDataArray = [
  {
    id: 1,
    categoryBadge: "Category",
    imageSrc: "https://i.imgur.com/xdbHo4E.png",
    productCategory: "Women,bag",
    productName: "Women leather bag",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    originalPrice: "$96.00",
    currentPrice: "$230.99",
    links: [
      {
        type: "favorite",
        iconClass: "fa fa-heart",
        href: "#"
      },
      {
        type: "cart",
        iconClass: "fa fa-shopping-cart",
        href: "#"
      }
    ]
  },
  {
    id: 2,
    categoryBadge: "New",
    imageSrc: "https://i.imgur.com/xdbHo4E.png",
    productCategory: "Men,shoes",
    productName: "Men running shoes",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    originalPrice: "$56.00",
    currentPrice: "$120.99",
    links: [
      {
        type: "favorite",
        iconClass: "fa fa-heart",
        href: "#"
      },
      {
        type: "cart",
        iconClass: "fa fa-shopping-cart",
        href: "#"
      }
    ]
  },
  {
    id: 1,
    categoryBadge: "Category",
    imageSrc: "https://i.imgur.com/xdbHo4E.png",
    productCategory: "Women,bag",
    productName: "Women leather bag",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    originalPrice: "$96.00",
    currentPrice: "$230.99",
    links: [
      {
        type: "favorite",
        iconClass: "fa fa-heart",
        href: "#"
      },
      {
        type: "cart",
        iconClass: "fa fa-shopping-cart",
        href: "#"
      }
    ]
  },
  {
    id: 2,
    categoryBadge: "New",
    imageSrc: "https://i.imgur.com/xdbHo4E.png",
    productCategory: "Men,shoes",
    productName: "Men running shoes",
    productDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
    originalPrice: "$56.00",
    currentPrice: "$120.99",
    links: [
      {
        type: "favorite",
        iconClass: "fa fa-heart",
        href: "#"
      },
      {
        type: "cart",
        iconClass: "fa fa-shopping-cart",
        href: "#"
      }
    ]
  },
];

const ProductCard = () => {
  return (


    <div>

    <section className="best-section">
      <h2 className="section-title">Best Seller</h2>
    </section>

    <div className="product-grid">
      {productDataArray.map((product) => (
        <div className="product-card" key={product.id}>
          <div className="badge">{product.categoryBadge}</div>
          <div className="product-tumb">
            <img src={product.imageSrc} alt={product.productName} />
          </div>
          <div className="product-details">
            <span className="product-catagory">{product.productCategory}</span>
            <h4>
              <a href="#">{product.productName}</a>
            </h4>
            <p>{product.productDescription}</p>
            <div className="product-bottom-details">
              <div className="product-price">
                <small>{product.originalPrice}</small>{product.currentPrice}
              </div>
              <div className="product-links">
                {product.links.map((link, index) => (
                  <a key={index} href={link.href}>
                    <i className={link.iconClass} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

</div>
  );
};

export default ProductCard;
