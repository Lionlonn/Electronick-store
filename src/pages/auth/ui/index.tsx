// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import React, { useState } from "react";
import {  Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useAppDispatch } from "src/shared/hooks";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";
import { setUser } from "src/features/auth/model";

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
            <TextInput 
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={(text) => setEmail(text)}
                value={email}
                >
            </TextInput>
            <TextInput 
                style={styles.input}
                placeholder="Password"
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
                >
            </TextInput> 
            <Button
                title="login"
                onPress={() => handleLogin(email, password)}
            />  
             <Button
                title="register"
                onPress={() => handleRegister(email, password)}
            /> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    input: {
        marginVertical: 4,
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff'
    }
    
})