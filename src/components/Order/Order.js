import React from 'react';
import useCard from '../../Hooks/useCard';
import useProducts from '../../Hooks/useProducts';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Order = () => {
    const [products,setProducts]=useProducts()
    const [card,setCard]=useCard(products)
    return (
        <div className='shop-container'>
            <div className="products-card-container">
                {
                    card.map(product=><ReviewItem
                        key={product.id}
                        product={product}
                    ></ReviewItem>)
                }
            </div>
            <div className="card-container">
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Order;