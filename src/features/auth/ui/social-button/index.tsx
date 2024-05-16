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

// GoogleSignin.configure({
//   webClientId: '710212738569-vaentlso46obld5b3231is62fvd1s50e.apps.googleusercontent.com',
// });

export const SocialAuthButton: React.FC<AuthButtonProps> = ({typeButton, navigation}) => {
    const [authenticated, setAutheticated] = useState(false);
   
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 20 : 16

    const dispatch = useAppDispatch()
    // const auth = FIREBASE_AUTH
    React.useEffect(() => {
        GoogleSignin.configure({
        webClientId: "261753105416-6e3atrb1jm1b9gei6o45a3g2ug0rupjt.apps.googleusercontent.com", 
        offlineAccess: true
        });
    }, [])
   

    const GoogleSingUp = async () => {
        try {
        await GoogleSignin.hasPlayServices();
        await GoogleSignin.signIn().then(result => { console.log(result) });
        } catch (error: any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        
            Alert.alert('User cancelled the login flow !');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            Alert.alert('Signin in progress');
            // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('Google play services not available or outdated !');
            // play services not available or outdated
        } else {
            console.log(error)
        }
        }
    };


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