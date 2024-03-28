import React from "react";
import { Product, ProductItem } from "src/entities/product";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Arrow from 'src/assets/images/arrow.svg';

interface NewArrialsProductProps {
    item: ProductItem;
    favorite: React.ReactNode
}


export const NewArrialsProduct = (props: NewArrialsProductProps) => {

    return (
        <View style={styles.container}>
            <View style={styles.sectionHeader}>
                <Text style={styles.headerTitle}>New arrivals</Text>
                <TouchableOpacity style={styles.seeMore}>
                    <Text>See more</Text>
                    <Arrow style={{position: 'absolute', right: 0, bottom: 0}}/>
                </TouchableOpacity>
            </View >
                
                <Product 
                    item={props.item} 
                    shapeView="rect"
                    favorite={props.favorite}
                />
                
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
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