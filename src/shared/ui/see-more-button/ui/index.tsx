import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Arrow from 'src/assets/images/arrow.svg'

interface SeeMoreButtonProps {
    navigation: any;
    path: string;
    categoryTitle?: string;
}

export const SeeMoreButton:React.FC<SeeMoreButtonProps> = ({navigation, path, categoryTitle}) => {

    
    return (
       <View>
            <TouchableOpacity style={styles.seeMore} onPress={() => {navigation.navigate(path, {title: categoryTitle})}}>
                <Text>See more</Text>
                <Arrow style={{position: 'absolute', right: 0, bottom: 0}}/>
            </TouchableOpacity>
        </View> 
    )
}

export const styles = StyleSheet.create({
    seeMore: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 20
    },
    headerTitle: {
        fontWeight: '800',
        fontSize: 18,
        color: '#040B14',
    },
    image: {
        width: 0,
        height: 0,
    }


})


