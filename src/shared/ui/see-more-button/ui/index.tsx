import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import Arrow from 'src/assets/images/arrow.svg'

interface Props {
    navigation: any;
    path: string
}

export const SeeMoreButton = (props: Props) => {


    return (
       <View style={styles.sectionHeader}>
            <TouchableOpacity style={styles.seeMore} onPress={() => {props.navigation.navigate(props.path)}}>
                <Text>See more</Text>
                <Arrow style={{position: 'absolute', right: 0, bottom: 0}}/>
            </TouchableOpacity>
        </View> 
    )
}

export const styles = StyleSheet.create({
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
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


