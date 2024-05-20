import React from "react";
import { TouchableOpacity } from "react-native";
import Avatarimage from '../../image/avatar.svg'
import auth from '@react-native-firebase/auth';

export const Avatar = ({navigation}: any) => {

    const SignOut = () => {
        auth()
            .signOut()
            .then(() => {
                navigation.navigate('LoginPage')
                console.log('User signed out!')
            });
    }
    return (
        <TouchableOpacity onPress={() => SignOut()}>
            <Avatarimage/>
        </TouchableOpacity>
    )
}