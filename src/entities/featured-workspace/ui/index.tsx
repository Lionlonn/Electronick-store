import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import Chair from '../image/chair.svg'
import Arrow from '../image/right-arrow.svg'

export const FeaturedWorkspace = () => {
    return (
        <View style={styles.container}>
            <LinearGradient 
                colors={['rgb(0, 2, 2)', 'rgb(35, 35, 35)', 'rgb(31, 31, 31)', 'rgb(35, 35, 35)']}
                style={styles.linearGradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                >
                <View style={styles.leftBlock}>
                    <Text style={styles.title}>FEATURED WORKSPACE</Text>
                    <Text style={styles.text}>Professional Gaming{"\n"}Assessories</Text>
                    <TouchableOpacity>
                        <View style={styles.viewSpace}>
                            <Text style={styles.textButton}>View space</Text>
                            <Arrow width={14} height={14} style={styles.arrow}/>
                        </View>
                        <View style={styles.textButtonBorder}></View>
                    </TouchableOpacity>
                </View>
                <Chair style={styles.rightImage}/>
            </LinearGradient>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    linearGradient: {
        marginTop: 40,
        minWidth: '90%',
        height: 180,
        borderRadius: 32,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        position: 'relative'
    },
    rightImage: {
        position: 'absolute',
        right: 20
    },
    leftBlock: {
        paddingLeft: 22,
        gap: 16
    },
    title: {
        color: 'rgb(193, 194, 184)',
        fontSize: 12,
        fontFamily: 'Avenir-Heavy',
        lineHeight: 16,
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Avenir-Heavy',
        fontWeight: '900',
        lineHeight: 18
    },
    viewSpace: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 5,
        position: "relative"
    },
    textButton: {
        color: 'rgb(206, 213, 91)',
        fontSize: 18,
        fontFamily: 'Avenir-Heavy',
        lineHeight: 16,
    },
    arrow: {
        position: 'absolute',
        right: 54,
        top: -2
    },
    textButtonBorder: {
        borderBottomWidth: 2,
        borderBottomColor: 'rgb(206, 213, 91)',
        width: 120,
    }
})