import React, { useState, useEffect } from "react";
import {  Alert, Button, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from "react-native";
import { FieldsAuth } from "src/shared/ui/auth-field";
import { AuthButton } from "src/features/auth/ui/auth-button/index";
import { SocialAuthButton } from "src/features/auth";
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { HomePage } from "src/pages/home/ui/intex";
import { LoadingIndicator } from "src/shared/ui/preloader";


export const LoginPage = ({navigation}: any) => {
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
        setLoading(false)
    }
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);
    
    useEffect(() => {
        auth().onAuthStateChanged(userState => {
        setUser(userState);
        });
    }, []);
    
    if (user) {
        navigation.navigate('HomePage')
    } 
    return (
        <ScrollView contentContainerStyle={styles.container}>
                {loading ? <LoadingIndicator/> : ''}
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
                    <SocialAuthButton typeButton="gmail" setLoading={setLoading}/>
                    <SocialAuthButton typeButton="facebook" setLoading={setLoading}/>
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

                
                
                <View style={styles.button}>
                    <AuthButton
                        typeButton="login"
                        navigation={navigation}
                        email={email}
                        password={password}
                        setLoading={setLoading}
                    />
                </View>
            </View>
                      
            <View style={[styles.footerButtons, {marginTop: width > 420 ? 40 : 0}]}>
                <TouchableOpacity>
                    <Text style={[styles.footerTextLeft, {fontSize: fontSize}]}>Forgot password</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('RegistrationPage')}>
                    <Text style={[styles.footerTextRight, {fontSize: fontSize}]}>Sign Up</Text> 
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
        justifyContent: 'center',
        
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
    socialAuthBlock: {
        width: '100%',
        gap: 20,
        marginBottom: 28
    },
    fields: {
        width: '100%',
        marginBottom: 40
    },
    button: {
        width: '100%',
        height: 50,
        
    },
    footerButtons: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerTextLeft: {
        color: 'rgb(138, 139, 122)'
    },
    footerTextRight: {
        color: 'rgb(186, 92, 61)'
    }
})