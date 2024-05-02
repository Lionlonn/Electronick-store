// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";
import {  Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useAppDispatch } from "src/shared/hooks";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";
import { setUser } from "src/features/auth/model";
import { FieldsAuth } from "src/shared/ui/auth-field";

export const LoginPage = ({navigation}: any) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);    

    const dispatch = useAppDispatch()
    const auth = FIREBASE_AUTH
    const handleLogin = (email: string, password: string) => {
        
        signInWithEmailAndPassword(auth, email, password)
            .then(({user}) => {
                console.log(user);
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken,
                }))
                navigation.navigate('HomePage')
            })
            .catch(console.error)
    }
    const handleRegister = (email: string, password: string) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .catch(console.error)
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.fields}>
                <FieldsAuth type="registration"/>
            </View>
            
            <View>
                <Button
                    title="login"
                    onPress={() => handleLogin(email, password)}
                />
            </View>          
             {/* <Button
                title="register"
                onPress={() => handleRegister(email, password)}
            />  */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFF'
    },
    contentContainer: {
        
    },
    fields: {
        width: '100%',
        
    },
})