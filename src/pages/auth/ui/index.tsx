import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";
import React, { useState } from "react";
import {  Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";


export const LoginPage = ({navigation}: any) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);    

    const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error: any) {
            console.log(error);
            Alert.alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
            Alert.alert('Check your emails!')
        } catch (error: any) {
            console.log(error);
            Alert.alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false);
        }
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

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff"/>
            ) : (
                <>
                    <Button title="Login" onPress={signIn}/>
                    <Button title="Sign up" onPress={signUp}/>
                </>
            )}

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