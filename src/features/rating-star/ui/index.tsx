import React from "react";
import { Image, StyleSheet, View} from "react-native";

interface Props {
    rating: number;
}

export const RatingStar = (props: Props) => {
    const maxRating = [1, 2, 3, 4, 5]

    const starImageCorner = require('../images/star_corner.png')
    const starImageFilled = require('../images/star_filled.png')

    return (
        <View style={styles.wrapper}>
            {maxRating.map((item, key) => (
                <Image 
                    style={styles.star}
                    key={key}
                    source={
                        item <= props.rating
                        ? starImageFilled
                        : starImageCorner
                }/>
                
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center'
    },
    star: {
        width: 12,
        height: 12,
        
    }
})