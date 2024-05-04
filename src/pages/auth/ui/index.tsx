import React, { useState } from "react";
import {  Alert, Button, Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useAppDispatch } from "src/shared/hooks";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";
import { setUser } from "src/features/auth/model";
import { FieldsAuth } from "src/shared/ui/auth-field";
import { AuthButton } from "src/features/auth/ui/auth-button/index";

export const LoginPage = ({navigation}: any) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ loading, setLoading ] = useState(false);    


    return (
        <View style={styles.container}>
            
            <View style={styles.fields}>
                <FieldsAuth 
                    type="login"
                    email={email}
                    password={password}
                    setEmail={setEmail}
                    setPassword={setPassword}
                    />
            </View>
            
            <View style={{height: 50, width: '100%'}}>
                <AuthButton
                    title="Login"
                    typeButton="login"
                    navigation={navigation}
                    email={email}
                    password={password}
                />
            </View>          
             
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