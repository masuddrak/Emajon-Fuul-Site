import React from 'react';
import useProducts from '../../Hooks/useProducts';

const Order = () => {
    const [products,setProducts]=useProducts()
    return (
        <div>
            show order{products.length}
        </div>
    );
};

export default Order;