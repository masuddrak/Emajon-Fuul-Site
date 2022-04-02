import React from 'react';
import './RevieItme.css'
const ReviewItem = (props) => {
    console.log(props.product)
    const {product,handelRemoveProduct}=props
    const {name,img,price,quantity,shipping}=props.product
    
    return (
        <div className='cards'>
            <div className='card-info'>
                <img src={img} alt="" />
                <div>
                    <h5>{name}</h5>
                    <p>Price:{price}</p>
                    <p>Quantity:{quantity}</p>
                    <p>Shipping:{shipping}</p>
                </div>
            </div>
            <button onClick={()=>handelRemoveProduct(product)}>Delet</button>
        </div>
    );
};

export default ReviewItem;