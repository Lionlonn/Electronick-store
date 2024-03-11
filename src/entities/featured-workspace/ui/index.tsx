import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Chair from '../image/chair.svg'
import LinearGradient from 'react-native-linear-gradient';

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
                </View>
                <Chair style={styles.rightImage}/>
            </LinearGradient>
            
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 20,
        // width: '90%',
        // backgroundColor: 'orange',
        // height: 180,
        // borderRadius: 32,
        // flexDirection: 'row',
        // alignItems: 'center',
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
        paddingLeft: 22
    },
    title: {
        color: 'rgb(193, 194, 184)',
        fontSize: 12,
        fontFamily: 'Avenir-Heavy',
        marginBottom: 10
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'Avenir-Heavy',
        fontWeight: '900'
    },
})