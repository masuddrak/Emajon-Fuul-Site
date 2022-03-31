import React from 'react';
import './Card.css'
const Card = ({card}) => {
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
        </div>
    );
};

export default Card;