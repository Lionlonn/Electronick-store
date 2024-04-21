import React from "react";
import { ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import { ProductInfoContainer } from "src/entities/product-info";
import { CartItem, addToCart } from "src/entities/product/model/action-creators";
import { ActionButtons } from "src/features/action-button";
import { useAppDispatch } from "src/shared/hooks";
import { ViewItemImagesBlock } from "src/widgets/item-images-swiper";


export const ViewItemPage = ({route}: any) => {
    const dispatch = useAppDispatch()
    const width = useWindowDimensions().width
    const item = route.params.item
    
    const handleAddToCart = (product: CartItem) => {
        dispatch(addToCart(product))
    }
    
    return (
        <ScrollView style={styles.bacground}>
            <View style={styles.container}>
                <ViewItemImagesBlock route={route}/>
                <View style={styles.info}>
                    <ProductInfoContainer route={route}/>
                </View>
                <View style={styles.actionsContainer}>
                    <ActionButtons 
                        title='Add to Card'
                        typeButton="add card"
                        action={() => handleAddToCart(item)}
                    />
                    <View style={{width: 60, height: 60, borderRadius: 22, backgroundColor: 'red'}}></View>
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        marginVertical: 20
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        gap: 10,
        marginBottom: 20
    }
})