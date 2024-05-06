import React, { useEffect, useState } from "react";
import { Alert, Dimensions, Image, StyleSheet, Text, TouchableOpacity, Vibration, View, useWindowDimensions } from "react-native";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";
import { useAuth } from "src/shared/hooks/use-auth";
import { useAppDispatch } from "src/shared/hooks";
import { setUser } from "src/features/auth/model";


interface AuthButtonProps {
    typeButton: 'gmail' | 'facebook';
    navigation?: any;

}



export const SocialAuthButton: React.FC<AuthButtonProps> = ({typeButton, navigation}) => {
    
   
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 20 : 16

    const dispatch = useAppDispatch()
    const auth = FIREBASE_AUTH

    

    // const onPressHandler = typeButton === 'login' ? handleLogin : handleRegister

    const socialButton = {
        gmail: {
            icon: require('../../image/google.png'),
            text: "Login with Google" 
        },
        facebook: {
            icon: require('../../image/facebook.png'),
            text: "Login with Facebook"
        }
    }
    const { icon, text } = socialButton[typeButton]

    return(
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.wrapper}
            onPress={() => ''}
            >
            
            <Image source={icon} style={styles.icon}/>
            
            <Text style={[styles.text, {fontSize: fontSize}]}>{text}</Text>
            
            
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
       width: '100%',
       borderWidth: 1,
       borderColor: 'rgb(193, 194, 184)', 
       height: 50,
       borderRadius: 8,
       flexDirection: 'row',
       alignItems: 'center',
       paddingHorizontal: 32,
       justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        left: 32
    },
    text: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '500',
        
        color: 'black',
        
    }
})