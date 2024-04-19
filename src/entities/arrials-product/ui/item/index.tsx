import React from "react";
import { Product, ProductItem } from "src/entities/product";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Arrow from 'src/assets/images/arrow.svg';
import { SeeMoreButton } from "src/shared/ui/see-more-button";

interface NewArrialsProductProps {
    item: ProductItem;
    favorite: React.ReactNode;
    navigation: any
}


export const NewArrialsProduct = (props: NewArrialsProductProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <Text style={styles.headerTitle}>New arrivals</Text>
                <SeeMoreButton navigation={props.navigation} path="WorkSpaces"/>
            </View>
                <View >
                    <Product 
                        item={props.item} 
                        shapeView="rect"
                        favorite={props.favorite}
                        navigation={props.navigation}
                    />  
                </View>
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    headerTitle: {
        fontWeight: '800',
        fontSize: 18,
        color: '#040B14',
    }, 
    seeMore: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        paddingRight: 20
    },
})