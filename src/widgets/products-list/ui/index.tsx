import React from "react";
import { useStateSelector } from "shared/hooks";
import { Product } from "entities/product";



export const ProductsList = () => {
    const { item, status } = useStateSelector(state => state.products)
    
    
    
    

    return (
        <>
           {item?.map(item => (
                <Product key={item.id} item={item}/>
               
           ))}
            
        </>
    )
}