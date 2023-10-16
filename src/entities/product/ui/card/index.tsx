import React from "react";
import { Alert, Button, Image, Text, View } from "react-native";
import { page } from '../card/style'

import type { RootState } from "../../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { add, remove } from '../../model/index'



export const ProductCard = () => {
    const favorite = useSelector((state: RootState) => state.favourite.isFavorites)
    const dispatch = useDispatch()

    
    
    

    return (
        
        <>
            <View>
                
                <Image
                    style={page.image}
                    source={{
                        uri: "https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg"
                }}/>
                <Text style={page.container}>URA URA</Text>
                <Button 
                    title="добавить"
                    onPress={() => dispatch(add())}
                />
                <Button 
                    title="удалить"
                    onPress={() => dispatch(remove())}
                    />
            </View>
            
        </>
    ) 
}


