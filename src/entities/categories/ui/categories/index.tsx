import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { categoryStyle } from "./style";
import { Item } from '../item/index'
import { ItemProps } from '../item/index'
import Arrow from '../../image/arrow.svg'
import DATA from '../../api/index'

export const CategoriesCarousel = ({ navigation }: any) => {
    const renderItem = ({ item }: { item: ItemProps }) => (
        <Item {...item} navigation={navigation} />
    );

    return (
        <SafeAreaView style={categoryStyle.container}>
            <View style={categoryStyle.sectionHeader}>
                <Text style={categoryStyle.HeaderTitle}>Workspaces</Text>
                <TouchableOpacity style={categoryStyle.seeMore}>
                    <Text>See more</Text>
                    <Arrow style={{position: 'absolute', right: 0, bottom: 0}}/>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    contentContainerStyle={{ paddingHorizontal: 10 }}
                    horizontal
                    data={DATA.map(item => ({...item, navigation}))}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

