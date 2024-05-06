import React, { useState } from "react";
import {  Alert, Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useAppDispatch } from "src/shared/hooks";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../../../../FirebaseConfig";
import { setUser } from "src/features/auth/model";
import { FieldsAuth } from "src/shared/ui/auth-field";
import { AuthButton } from "src/features/auth/ui/auth-button/index";
import { SocialAuthButton } from "src/features/auth";

export const LoginPage = ({navigation}: any) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const width = useWindowDimensions().width
    const fontSize = width > 420 ? 22 : 16
    


    return (
        <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.containerContent}>
                <View style={styles.titleBlock}>
                        <View style={styles.greetingBlock}>
                            <Text style={[styles.greetingText, {fontSize: fontSize}]}>HI FELLA</Text>
                            <Image
                                source={require('../image/hello_image.png')}
                            />
                        </View>
                    <Text style={[styles.sybGreetingText, {fontSize: fontSize * 1.3}]}>WELCOME BACK</Text>
                </View>
                
                
                <View style={styles.socialAuthBlock}>
                    <SocialAuthButton typeButton="gmail"/>
                    <SocialAuthButton typeButton="facebook"/>
                </View>
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
                      
            <View style={styles.footerButtons}>
                <TouchableOpacity>
                    <Text>Forgot password</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RegistrationPage')}>
                    <Text>Login</Text> 
                </TouchableOpacity>
            </View>
            
            
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: '#FFF'
        
    },
    containerContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleBlock: {
        alignSelf: 'flex-start',
        marginBottom: 50
    },
    greetingBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        
    },
    greetingText: {
        fontFamily: 'Avenir-Heavy',
        color: 'rgb(138, 139, 122)',
        fontWeight: '800'
    },
    sybGreetingText: {
        fontFamily: 'Avenir-Heavy',
        color: 'black',
        fontWeight: '900'
    },
    contentContainer: {
        
    },
    socialAuthBlock: {
        width: '100%',
        gap: 20,
        marginBottom: 28
    },
    fields: {
        width: '100%',
        marginBottom: 40
    },
    footerButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',   
    }
})