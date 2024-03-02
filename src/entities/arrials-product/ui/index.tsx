import React, { useEffect, useState } from "react";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { addToFavorite, removeFromFavorite } from "src/features/favorite";
import { ProductItem } from "src/entities/product";
import { View, Text } from "react-native";
import { ProductCard } from "src/entities/product/ui/card";


export const NewArrialsProduct = () => {
    const { item, status } = useStateSelector(state => state.products);
    const [product, setProduct] = useState<ProductItem | null>(null);

    useEffect(() => {
        if (status === 1 && item && item.length > 0) {
            setProduct(item[0]);
        }
    }, [status, item]);

    const dispatch = useAppDispatch();
    const favoriteItems = useStateSelector(state => state.favorite.items);
    const isFavorite = favoriteItems.some(product => product.id === item?.[0]?.id);

    const handleToggleFavorite = (product: ProductItem) => {
        isFavorite 
        ? dispatch(removeFromFavorite(product)) 
        : dispatch(addToFavorite(product));
    };

    return (
        <View>
            <Text>New arrivals</Text>
                {status === 1 && product && (
                    <ProductCard 
                        item={product} 
                        handleToggleFavorite={handleToggleFavorite} 
                        isFavorite={isFavorite}
                    />
                )}
        </View>
    )
}