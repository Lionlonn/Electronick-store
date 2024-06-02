import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useState } from 'react';

export const _signUpEmailAndPassword = async (email: string, password: string) => {
    auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
            console.log('User account created & signed in!');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
}

