import React from "react";
import { ScrollView } from "react-native";
import { ProductItem } from "src/entities/product";
import { ViewItemImagesBlock } from "src/widgets/item-images-swiper";


export const ViewItemPage = ({route}: any) => {
    
    
    return (
        <ScrollView>
            <ViewItemImagesBlock route={route}/>
        </ScrollView>
    )
}