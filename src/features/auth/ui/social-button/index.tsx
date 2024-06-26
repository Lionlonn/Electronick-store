import React, { useEffect, useState }  from "react";
import {  StyleSheet,  useWindowDimensions, TouchableOpacity, Text, Image } from "react-native";

import { useAppDispatch } from "src/shared/hooks";
import { _signInWithGoogle } from "features/auth/firebase/social-user";
interface AuthButtonProps {
    typeButton: 'gmail' | 'facebook';
    navigation?: any;
    setLoading: (loading: boolean) => void;
}



export const SocialAuthButton: React.FC<AuthButtonProps> = ({typeButton, navigation, setLoading}) => {
    const [authenticated, setAutheticated] = useState(false);
   
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 20 : 16

    const dispatch = useAppDispatch()

    const GoogleSingUp =  () => {
        setLoading(true)
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