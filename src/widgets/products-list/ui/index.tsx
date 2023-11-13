import React from "react";
import { useStateSelector } from "../../../shared/hooks/hooks";
import { Product } from "../../../entities/product/ui";



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