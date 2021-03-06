import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts';
import { addToDb, grtStorgeCard } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useProducts()
    const [card,setCard]=useState([])
    
    useEffect(()=>{
        const storgedCard=grtStorgeCard()
        const savCard=[];
        for(const id in storgedCard){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity=storgedCard[id]
                addedProduct.quantity=quantity
                savCard.push(addedProduct)
            }
        }
        setCard(savCard)
    },[products])
   
    const hadelAddToCard=(selectedProduct)=>{
        const exists=card.find(product=>product.id===selectedProduct.id)
        let newCard=[]
        if(!exists){
            selectedProduct.quantity=1
            newCard=[...card,selectedProduct]
        }
        else{
            const rest=card.filter(product=>product.id===selectedProduct.id)
            exists.quantity=exists.quantity+1
            newCard=[...rest,exists]
        }
        setCard(newCard)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        hadelAddToCard={hadelAddToCard}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Card card={card}>
                    <Link to='/order'>
                        <button>Review Order</button>
                    </Link>
                </Card>
            </div>
        </div>
    );
};

export default Shop;