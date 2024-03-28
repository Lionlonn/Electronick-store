import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useStateSelector } from "src/shared/hooks";
import { ProductItem } from "src/entities/product";
import { NewArrialsProduct } from "./item";
import { Favorite } from "src/features/favorite";




export const ContainerNewArrialProduct = () => {
    const { item, status } = useStateSelector(state => state.products);
    const [product, setProduct] = useState<ProductItem | null>(null); 
    
    
    
    useEffect(() => {
        if (status === 1 && item && item.length > 0) {
            let randorProduct = item[Math.floor(Math.random()*item.length)]
            setProduct(randorProduct);
        }
    }, [status, item]);


    const favoriteItems = useStateSelector(state => state.favorite.items);
    const isFavorite = product ? favoriteItems.some(favoriteProduct => favoriteProduct.id === product.id) : false;
    


    return (
        <View>
            {status === 1 && product && (
                <NewArrialsProduct 
                    item={product} 
                    favorite={
                        <Favorite 
                            product={product}
                            isFavorite={isFavorite}
                        />
                    }
                    />
            
            )}
            
        </View>
    )
}