import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { categoryStyle } from "../categories/style";

export type ItemProps = {
    title: string,
    image: any,
    count: number
    navigation: any
}

export const Item = ({ title, image, count, navigation}: ItemProps) => (
    <TouchableOpacity onPress={() => { navigation.navigate('WorkSpaces', count) }}>
        <View style={categoryStyle.item}>
            <View>{image}</View>
            <Text style={categoryStyle.itemTitle}>{title}</Text>
            <Text style={categoryStyle.itemCount}>{count} suggested items</Text>
        </View>
    </TouchableOpacity>
);

