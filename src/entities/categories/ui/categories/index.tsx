import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { categoryStyle } from "./style";
import { images } from '../../image/index';
import Arrow from '../../image/arrow.svg'

const { developer, marketer, blogger, photograther, creative } = images;

const DATA = [
    { image: developer, id: 1, title: "Developer", count: 21 },
    { image: marketer, id: 2, title: "Marketer", count: 7 },
    { image: blogger, id: 3, title: "Blogger", count: 12 },
    { image: photograther, id: 4, title: "Photographer", count: 13 },
    { image: creative, id: 5, title: "Creative", count: 3 }
];

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

