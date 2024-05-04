import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View} from "react-native";

import { useAppDispatch } from "src/shared/hooks";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from "../../../../../FirebaseConfig";
import { setUser } from "src/features/auth/model";
import { PhoneNumberInput } from "../../number-field";

interface AuthFieldsProps {
    type: 'login' | 'registration';
    email: string;
    password: string;
    number?: string;
    setEmail: (text: string) => void;
    setPassword: (text: string) => void;
}

export const FieldsAuth: React.FC<AuthFieldsProps> = ({type, email, password, number, setEmail, setPassword}) => {
    
    return (
        <View >
            {type === 'login' ? (
                <View style={styles.fieldsContainer}>
                    <View>
                        <Text style={styles.title}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholderTextColor={'rgb(138, 139, 122)'}
                            >
                        </TextInput>
                    </View> 
                    <View>
                        <Text style={styles.title}>Password</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Password"
                            autoCapitalize="none"
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                            placeholderTextColor={'rgb(138, 139, 122)'}
                            >
                        </TextInput> 
                    </View>
                    
                </View>       
            ) : (
                <View style={styles.fieldsContainer}>
                    <View>
                        <Text style={styles.title}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Email"
                            autoCapitalize="none"
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            placeholderTextColor={'rgb(138, 139, 122)'}
                            >
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.title}>Phone number</Text>
                        <PhoneNumberInput/>
                        
                        
                        
                    </View>
                    <View>
                        <Text style={styles.title}>Password</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder="Password"
                            autoCapitalize="none"
                            onChangeText={(text) => setPassword(text)}
                            value={password}
                            secureTextEntry={true}
                            placeholderTextColor={'rgb(138, 139, 122)'}
                            >
                        </TextInput>
                    </View> 
                     
                </View>
            )}
            
            
        </View>
    )
}


const styles = StyleSheet.create({
    fieldsContainer: {
        gap: 20
    },
    input: {
        marginVertical: 4,
        width: '100%',
        height: 50,
        borderRadius: 8,
        padding: 10,
        backgroundColor: 'rgb(246, 246, 245)',
        fontSize: 16,
        fontFamily: 'Avenir-Heavy',
        fontWeight: '400',
        color: 'rgb(138, 139, 122)'
    },
    title: {
        fontSize: 14,
        fontFamily: 'Avenir-Black',
        fontWeight: '500',
        color: 'black',
        marginBottom: 5
    }
    
})