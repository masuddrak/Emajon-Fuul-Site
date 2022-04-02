import React from 'react';
import useCard from '../../Hooks/useCard';
import useProducts from '../../Hooks/useProducts';
import Card from '../Card/Card';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Order = () => {
    const [products,setProducts]=useProducts()
    const [card,setCard]=useCard(products)
    const handelRemoveProduct=(product)=>{
        const rest=card.filter(pd=>pd.id !==product.id)
        setCard(rest)
    }
    return (
        <div className='shop-container'>
            <div className="products-card-container">
                {
                    card.map(product=><ReviewItem
                        key={product.id}
                        product={product}
                        handelRemoveProduct={handelRemoveProduct}
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