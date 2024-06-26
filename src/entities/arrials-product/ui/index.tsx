import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useStateSelector } from "src/shared/hooks";
import { NewArrialsProduct } from "./item";
import { Favorite } from "src/features/favorite";
import { ProductItem } from "src/entities/product/api";




export const ContainerNewArrialProduct = ({navigation}: any) => {
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
                    navigation={navigation}
                    favorite={
                        <Favorite
                            type="mainIcon" 
                            product={product}
                            isFavorite={isFavorite}
                        />
                    }
                    />
            
            )}
            
        </View>
    )
}