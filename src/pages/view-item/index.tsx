import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Product, ProductItem } from "src/entities/product";
import { ProductInfoContainer } from "src/entities/product-info";
import { ViewItemImagesBlock } from "src/widgets/item-images-swiper";


export const ViewItemPage = ({route}: any) => {
    
    
    return (
        <ScrollView style={styles.bacground}>
            <ViewItemImagesBlock route={route}/>
            <ProductInfoContainer route={route}/>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    bacground: {
        backgroundColor: '#FFF'
    }
})