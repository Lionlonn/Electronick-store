import React from "react";
import { ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import { ProductInfoContainer } from "src/entities/product-info";
import { CartItem, addToCart } from "src/entities/product/model/action-creators";
import { ActionButtonsProduct } from "src/features/action-button";
import { Favorite } from "src/features/favorite";
import { useAppDispatch, useStateSelector } from "src/shared/hooks";
import { PropsParam } from "src/shared/types/stack-param";
import { ViewItemImagesBlock } from "src/widgets/item-images-swiper";



export const ViewItemPage: React.FC<PropsParam> = ({route}) => {
    const dispatch = useAppDispatch()
    const width = useWindowDimensions().width
    const item = route.params.item
    const favoriteItems = useStateSelector(state => state.favorite.items)
    
    const handleAddToCart = (product: CartItem) => {
        dispatch(addToCart(product))
    }
    console.log(item) 
    return (
        <ScrollView style={styles.bacground}>
            <View style={styles.container}>
                <ViewItemImagesBlock route={route}/>
                <View style={styles.info}>
                    <ProductInfoContainer route={route}/>
                </View>
                <View style={styles.actionsContainer}>
                    <ActionButtonsProduct 
                        title='Add to Card'
                        typeButton="add card"
                        action={() => handleAddToCart(item)}
                    />
                    <View >
                        <Favorite 
                            type="cartIcon"
                            product={item}
                            isFavorite={favoriteItems.some(product => product.id === item.id)}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    bacground: {
        backgroundColor: '#FFF',
        
    },
    container: {
        flex: 1,
    },
    info: {
        marginVertical: 20
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 20,
        gap: 10,
        marginBottom: 20
    }
})