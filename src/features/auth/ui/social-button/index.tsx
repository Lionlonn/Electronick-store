import React, { useEffect, useState }  from "react";
import {  StyleSheet,  useWindowDimensions, TouchableOpacity, Text, Image, Alert } from "react-native";
import {  signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

import { useAppDispatch } from "src/shared/hooks";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import  auth  from "@react-native-firebase/auth";
import database from "@react-native-firebase/database"
import { _signInWithGoogle } from "../../firebase";
interface AuthButtonProps {
    typeButton: 'gmail' | 'facebook';
    navigation?: any;

}



export const SocialAuthButton: React.FC<AuthButtonProps> = ({typeButton, navigation}) => {
    const [authenticated, setAutheticated] = useState(false);
   
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 20 : 16

    const dispatch = useAppDispatch()

    const GoogleSingUp =  () => {
        _signInWithGoogle()
    }
    

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
            onPress={() => GoogleSingUp()}
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