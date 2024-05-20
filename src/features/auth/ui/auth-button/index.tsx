import React, { useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from "react-native";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, User } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";
import { useAuth } from "src/shared/hooks/use-auth";
import { useAppDispatch } from "src/shared/hooks";
import { setUser } from "src/features/auth/model";
import { _signInEmailAndPassword, _signUpEmailAndPassword } from "../../firebase";


interface AuthButtonProps {
    title: string;
    typeButton: 'login' | 'signup';
    navigation?: any;
    email: string;
    password: string

}



export const AuthButton: React.FC<AuthButtonProps> = ({title, typeButton, navigation, email, password}) => {
      
   
    const width = useWindowDimensions().width;
    const fontSize = width > 420 ? 22 : 16

    const dispatch = useAppDispatch()
    const auth = FIREBASE_AUTH
    
    
    const handleLogin = () => {
        if (email && password !== null) _signInEmailAndPassword(email, password)
            
        
        
        
    }
    const handleRegister = () => {
        if (email && password !== null) _signUpEmailAndPassword(email, password)
        
    }

    const onPressHandler = typeButton === 'login' ? handleLogin : handleRegister

    return(
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.wrapper}
            onPress={onPressHandler}
            >
            <Text style={[ styles.title, {fontSize: fontSize}]}>{title}</Text>
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