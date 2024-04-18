import React from "react";
import { View} from "react-native";
import { ProductInfo } from "./info";


export const ProductInfoContainer = ({route}: any) => {
    const { name, category, price, rating, info} = route.params.item
    console.log(route.params.item)

    return (
        <View> 
           <ProductInfo
                name={name}
                category={category}
                price={price}
                rating={rating}
                info={info}
            />
        </View>
    )
}