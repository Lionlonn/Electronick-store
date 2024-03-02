import React, { useEffect, useState } from "react";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { addToFavorite, removeFromFavorite } from "src/features/favorite";
import { ProductItem } from "src/entities/product";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ProductCard } from "src/entities/product/ui/card";
import Arrow from 'src/assets/images/arrow.svg';


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
            <View style={styles.sectionHeader}>
                <Text style={styles.headerTitle}>New arrivals</Text>
                <TouchableOpacity style={styles.seeMore}>
                    <Text>See more</Text>
                    <Arrow style={{position: 'absolute', right: 0, bottom: 0}}/>
                </TouchableOpacity>
            </View >
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

const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    headerTitle: {
        fontWeight: '800',
        fontSize: 18,
        color: '#040B14',
    }, 
    seeMore: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 20
    },
})