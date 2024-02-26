import React from "react";
import { TouchableOpacity } from "react-native";
import Avatarimage from '../image/avatar.svg'

export const Avatar = () => {
    return (
        <TouchableOpacity onPress={() => console.log('Profile page')}>
            <Avatarimage/>
        </TouchableOpacity>
    )
}