import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { categoryStyle } from "./style";
import { Item } from '../item/index'
import { ItemProps } from '../item/index'
import Arrow from 'src/assets/images/arrow.svg'
import DATA from '../../api/index'

export const CategoriesCarousel = ({ navigation }: any) => {
    const renderItem = ({ item }: { item: ItemProps }) => (
        <Item {...item} navigation={navigation} />
    );

    return (
        <View style={categoryStyle.container}>
            <View style={categoryStyle.sectionHeader}>
                <Text style={categoryStyle.headerTitle}>Workspaces</Text>
                <TouchableOpacity style={categoryStyle.seeMore} onPress={() => { navigation.navigate('WorkSpaces') }}>
                    <Text>See more</Text>
                    <Arrow style={{position: 'absolute', right: 0, bottom: 0}}/>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <FlatList
                    contentContainerStyle={{ gap: 10 }}
                    horizontal
                    data={DATA.map(item => ({...item, navigation}))}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    decelerationRate={0.7}
                    showsHorizontalScrollIndicator={false}
                />
            </ScrollView>
        </View>
    );
};

