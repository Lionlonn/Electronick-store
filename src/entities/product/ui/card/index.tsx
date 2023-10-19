import React from "react";
import { Alert, Button, Image, Text, View } from "react-native";
import { page } from '../card/style'

interface Props {
    addToFavorites: () => void
    removeToFavorites: () => void
}


export const ProductCard:React.FC<Props> = (props: Props) => {
    
      

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
                    onPress={props.addToFavorites}
                />
                <Button 
                    title="удалить"
                    onPress={props.removeToFavorites}
                    />
            </View>
            
        </>
    ) 
}


