import React from "react";
import { FlatList, View, Text, Image} from "react-native";
import { categoryStyle } from "./style";

import {images} from '../../image/index'

const {developer, marketer, blogger, photograther, creative} = images



const DATA = [
    {image: developer, id: 1, title: "Developer"},
    {image: marketer, id: 2, title: "Developer"},
    {image: blogger, id: 3, title: "Developer"},
    {image: photograther, id: 4, title: "Developer"},
    {image: creative, id: 5, title: "Developer"}
]

type ItemProps = {
    title: string,
    image: any,
}



const Item = ({title, image}: ItemProps) => (
    <View style={categoryStyle.item}>
        <Text style={categoryStyle.title}>{title}</Text>
    </View>
  );
export const CategoriesCarousel = () => {

    const keyExtractor = (item: {id: number}) => item.id.toString();
    return (
        
        <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} image={item.image}/>}
            keyExtractor={keyExtractor}
      />
    )
}