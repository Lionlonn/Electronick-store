import React from "react";
import { ScrollView } from "react-native";
import { ItemImagesBlock } from "src/entities/item-block-images/ui";
import { ProductItem } from "src/entities/product";


export const ViewItemPage = ({route}: any) => {
    const img = route.params.item.img
    // console.log(route.params.item)
    return (
        <ScrollView>
           <ItemImagesBlock images={img}/> 
        </ScrollView>
    )
}