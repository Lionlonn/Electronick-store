import React, { useEffect }  from "react";
import {  StyleSheet,  useWindowDimensions, TouchableOpacity, Text, Image } from "react-native";
import {  signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

import { useAppDispatch } from "src/shared/hooks";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import  auth  from "@react-native-firebase/auth";
import database from "@react-native-firebase/database"

interface AuthButtonProps {
    typeButton: 'gmail' | 'facebook';
    navigation?: any;

}

GoogleSignin.configure({
  webClientId: '710212738569-vaentlso46obld5b3231is62fvd1s50e.apps.googleusercontent.com',
});

export const SocialAuthButton: React.FC<AuthButtonProps> = ({typeButton, navigation}) => {
    
   
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 20 : 16

    const dispatch = useAppDispatch()
    // const auth = FIREBASE_AUTH

    function onAuthStateChanged(user:any) {
        console.log(user)
        navigation.navigate('HomePage')
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const handleGoogleLogin = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }

    // const handleGoogleAuth = async () => {
    //     const provider = await new GoogleAuthProvider();
    //     return signInWithPopup(auth, provider)
        
  
    // }

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
            onPress={handleGoogleLogin}
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