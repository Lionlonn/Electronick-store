import {StyleSheet, Platform } from "react-native";

export const page = StyleSheet.create({
    container: {
        // flex: 1
    },
    
    wrapper: {
        width: 366,
        height: 110,
        borderWidth: 2,
        borderColor: "#DDDDDB",
        backgroundColor: "#FFF",
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        padding: 20,
        marginBottom: 20
        
        
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    imageBlock: {
        width: 105,
        height: 86,
        backgroundColor: "#F4F5F7",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
    },
    title: {
        color: "#040B14",
        fontSize: 16,
        fontWeight: "500",

    },
    info: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
        marginBottom: 12
    },
    icon: {
        width: 3,
        height: 3,
        backgroundColor: "#A6A798",
        borderRadius: 22
    },
    ratingIcon: {
        width: 50,
        height: 52,
        
    },
    subTitle: {
        fontSize: 12,
        fontFamily: "Avenir",
        fontWeight: "500",
    },
    shadowProp: {
        shadowColor: "black",
        elevation: 10
    },
    addFaforites: {
        position: 'absolute',
        top: 0,
        right: 10
    }
})