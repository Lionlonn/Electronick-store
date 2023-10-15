import React from "react";
import { Alert, Image, Text, View } from "react-native";
import { ProductApi } from "../../api";
import { page } from '../card/style'



export const Product = () => {

    console.log(ProductApi.getProduct());
    
    

    return (
        
        <>
            <View>
                <Image
                    style={page.image}
                    source={{
                        uri: "https://ironfriends.ru/wp-content/uploads/2022/10/03_iPhone_13.jpg"
                }}/>
                <Text style={page.container}>kak work</Text>
            </View>
            
        </>
    ) 
}


