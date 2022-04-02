import React, { useEffect, useState } from 'react';
import { grtStorgeCard } from '../utilities/fakedb';

const useCard = (products) => {
    const [card,setCard]=useState([])
    useEffect(()=>{
        const storgedCard=grtStorgeCard()
        const savedCard=[]
        for(const id in storgedCard){
            const addedProduct=products.find(product=>product.id===id)
            if(addedProduct){
                const quantity=storgedCard[id]
                addedProduct.quantity=quantity
                savedCard.push(addedProduct)
            }
        }
        setCard(savedCard)
    },[products])
    return [card,setCard]
};

export default useCard;