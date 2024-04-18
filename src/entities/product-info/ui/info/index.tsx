import React from "react";
import { StyleSheet, Text, View} from "react-native";
import { RatingStar } from "src/features/rating-star";

interface Props {
    name: string;
    category: string;
    price: number;
    rating: number;
    info: string;
}



export const ProductInfo = (props: Props) => {
    
    return (
        <View style={styles.container}> 
            <View>
                <Text>{props.name}</Text>
                <View style={styles.subTitleInfo}>
                    <Text>{props.category}</Text>
                    <Text>{props.rating}</Text>
                    <RatingStar rating={props.rating}/> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subTitleInfo: {
        flexDirection: 'row',
        gap: 10
    },
    fullStar: {
        backgroundColor: 'rgb(242, 201, 76)'
    }
})