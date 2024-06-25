import React, { useState, useEffect } from "react";
import {  ActivityIndicator, Alert, Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { FieldsAuth } from "src/shared/ui/auth-field";
import { AuthButton } from "src/features/auth/ui/auth-button/index";
import { SocialAuthButton } from "src/features/auth";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'



export const SignUpPage = ({navigation}: any) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const width = useWindowDimensions().width
    const fontSize = width > 420 ? 22 : 16
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
    const [ loading, setLoading ] = useState<Boolean>(false)
    
    function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
        setUser(user);
        if (initializing) {
            setInitializing(false)
        };
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);
    
    useEffect(() => {
        auth().onAuthStateChanged(userState => {
        setUser(userState);

        if (loading) {
            setLoading(false);
            
           
        }
        });
    }, []);
    
    if (user) {
        navigation.navigate('HomePage')
    }

    if (loading) {
        return <ActivityIndicator/>
    }

    console.log(loading)
    return (
        <ScrollView contentContainerStyle={styles.container}>
                
                <View style={styles.containerContent}>
                <View style={styles.titleBlock}>
                        <View style={styles.greetingBlock}>
                            <Text style={[styles.greetingText, {fontSize: fontSize}]}>HI FELLA</Text>
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