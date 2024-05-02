import React from "react";
import { TouchableOpacity } from "react-native";
import Avatarimage from '../../image/avatar.svg'

export const Avatar = ({navigation}: any) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('LoginPage')}>
            <Avatarimage/>
        </TouchableOpacity>
    )
}