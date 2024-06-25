import React, { useEffect, useState } from "react";
import {  StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";
import { useAppDispatch } from "src/shared/hooks";
import { _signInEmailAndPassword } from "features/auth/firebase/login-user";
import { _signUpEmailAndPassword } from "features/auth/firebase/registration-user";

interface AuthButtonProps {
    typeButton: 'login' | 'signup';
    navigation?: any;
    email: string;
    password: string;
    setLoading: (loading: boolean) => void;
}



export const AuthButton: React.FC<AuthButtonProps> = ({typeButton, navigation, email, password, setLoading}) => {
      
   
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16
    
    const auth = FIREBASE_AUTH
    
    
    const handleLogin = () => {
        if (email && password !== null) (
            setLoading(true),
            _signInEmailAndPassword(email, password)

        )
    }
    const handleRegister = () => {
        if (email && password !== null) (
            setLoading(true),
            _signUpEmailAndPassword(email, password)
        )
        
    }

    const onPressHandler = typeButton === 'login' ? handleLogin : handleRegister
    const titleButton = typeButton === 'login' ? "Login" : 'Sign Up'

    return(
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.wrapper}
            onPress={onPressHandler}
            >
            <Text style={[ styles.title, {fontSize: fontSize}]}>{titleButton}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: 'rgb(206, 213, 91)'
    },
    title: {
        fontFamily: 'Avenir-Heavy',
        fontWeight: '500',
        lineHeight: 22,
        color: 'rgb(4, 11, 20'
    }
})