import React from "react";
import { View, Text, SafeAreaView, SectionList, Button, TouchableOpacity, Alert } from "react-native";
import { categoryStyle } from "./style";
import { images } from '../../image/index';

const { developer, marketer, blogger, photograther, creative } = images;

const DATA = [
    {
        HeaderTitle: 'Workspaces',
        data: [
            { image: developer, id: 1, title: "Developer", count: 21},
            { image: marketer, id: 2, title: "Marketer", count: 7},
            { image: blogger, id: 3, title: "Blogger", count: 12},
            { image: photograther, id: 4, title: "Photographer", count: 13},
            { image: creative, id: 5, title: "Creative", count: 3}
        ]
    }
];

type ItemProps = {
    title: string,
    image: any,
    count: number,
    navigation: any
}

const Item = ({ title, image, count, navigation}: ItemProps) => (
    

    <View style={categoryStyle.item}>
        <TouchableOpacity onPress={() => {navigation.navigate('WorkSpaces', count)}}>
            <View >{image}</View>
            <Text style={categoryStyle.itemTitle}>{title}</Text>
            <Text style={categoryStyle.itemCount}>{count} suggested items</Text>
        </TouchableOpacity>
    </View>
);

export const CategoriesCarousel = ({navigation}: any) => {
    return (
        <SafeAreaView style={categoryStyle.container}>
                <Text style={categoryStyle.sectionHeader}>Workspaces</Text>
                <View>
                    <SectionList
                        contentContainerStyle={{ paddingHorizontal: 10 }}
                        stickySectionHeadersEnabled={false}
                        horizontal
                        sections={DATA}
                        keyExtractor={(item, index) => item.id.toString()}
                        renderItem={({ item }) => <Item title={item.title} image={item.image} count={item.count} navigation={navigation}/>}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                
        </SafeAreaView>
    );
};
