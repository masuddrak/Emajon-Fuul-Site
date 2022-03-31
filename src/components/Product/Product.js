import React from 'react';
import './Product.css'
const Product = ({hadelAddToCard,product}) => {
    const {img,name,price,seller,ratings}=product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
            <h6 className='product-name'>{name}</h6>
            <p>price:${price}</p>
            <p>Seller:{seller}</p>
            <p>Ratings:{ratings}start</p>
            </div>
            <button onClick={()=>hadelAddToCard(product)} className='btn-card'>Add to Card</button>
        </div>
    );
};

export default Product;