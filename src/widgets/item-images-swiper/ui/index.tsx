import React from "react";
import { View } from "react-native";
import { ImagesSwiper } from "src/entities/item-block-images/ui/center-block";

interface Props {
    route: any
}

export const ViewItemImagesBlock = (props: Props) => {
    const img = props.route.params.item.img
    return (
        <View>
            <ImagesSwiper images={img}/>
        </View>
    )
}