import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { useStateSelector } from "src/shared/hooks";

interface CartOrderProps {
    id: number;
    image: string;
    date: string;
    name: string;
    linkCart?: string;
}


export const CartOrder:React.FC<CartOrderProps> = ({id, image, date, name, linkCart}) => {
    
    const width = useWindowDimensions().width
    const fontSize = width > 420 ? 18 : 14 

    

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}> 
                <View style={styles.image}>
                    <Image 
                        source={{uri: image}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.contentInfo}>
                    <Text style={[styles.text, {fontSize: fontSize}]}>Delivered september {date}</Text>
                    <Text style={[styles.text, {fontSize: fontSize * 1.3}]}>{name}</Text>
                </View>
                <Text style={styles.textId}>#{id}</Text>
            </View> 
            <TouchableOpacity style={styles.button}>
               <Text style={[styles.text]}>View Item</Text> 
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        minHeight: 178,
        backgroundColor: 'rgb(244, 245, 247)',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        gap: 12
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 8,
        paddingRight: 12
        
    },
    image: {
        flex: 1,
        borderRadius: 8
    },
    contentInfo: {
        flex: 2,
        gap: 7,
        justifyContent: 'center',
    },
    text: {
        color: 'black',
        fontFamily: 'Avenir-Heavy'
    },
    textId: {
        color: 'rgb(186, 92, 61)',

    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderRadius: 8,

    }
})