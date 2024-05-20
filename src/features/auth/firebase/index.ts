import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import { useEffect, useState } from 'react';


export const _signInWithGoogle = async () => { 
    try {
       GoogleSignin.configure({
        webClientId: "261753105416-6e3atrb1jm1b9gei6o45a3g2ug0rupjt.apps.googleusercontent.com", 
        offlineAccess: true
        });
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const { idToken, user } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        return auth().signInWithCredential(googleCredential);

    } catch (error:any) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('User cancelled the login flow !');
        } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Signin in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Google play services not available or outdated !');
        } else {
            console.log(error)
        }
    }
};

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
export const _signInEmailAndPassword = async (email: string, password: string) => {
    auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('auth user success')
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