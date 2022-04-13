import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
const Card = (props) => {
    const {card}=props
    console.log(card)
    let total=0;
    let shipping=0;
    let quantity=0
    for(const product of card){
        quantity=quantity+product.quantity;
        total=total+product.price*product.quantity;
        shipping=shipping+product.shipping;
    }
    const tex=total*0.1;
    const grandTotal=total+shipping+tex;
    return (
        <div className='card'>
            <h3>Product summay</h3>
            <p>Selected items :{quantity}</p>
            <p>Total Price:${total}</p>
            <p>Shipping:${shipping}</p>
            <p>Tex:${tex.toFixed(2)}</p>
            <p>Grand Total:${grandTotal.toFixed(2)}</p>
            {props.children}
            <Link to='/shipping'>Shippin Now</Link>
        </div>
    );
};

export default Card;