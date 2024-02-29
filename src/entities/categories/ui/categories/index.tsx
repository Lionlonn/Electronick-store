import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { categoryStyle } from "./style";
import Arrow from '../../image/arrow.svg'
import DATA from '../../api/index'

type ItemProps = {
    title: string,
    image: any,
    count: number,
    navigation: any
}

const Item = ({ title, image, count, navigation }: ItemProps) => (
    <TouchableOpacity onPress={() => { navigation.navigate('WorkSpaces', count) }}>
        <View style={categoryStyle.item}>
            <View>{image}</View>
            <Text style={categoryStyle.itemTitle}>{title}</Text>
            <Text style={categoryStyle.itemCount}>{count} suggested items</Text>
        </View>
    </TouchableOpacity>
);

export const CategoriesCarousel = ({ navigation }: any) => {
    const renderItem = ({ item }: { item: any }) => (
        <Item title={item.title} image={item.image} count={item.count} navigation={navigation} />
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
                    data={DATA}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};

