import React from "react";
import { Alert, Image, Text, View } from "react-native";
import { page } from '../card/style'
import { useSelector } from "react-redux";
import { useStateSelector } from "../../../../shared/hooks/hooks";
import { Product } from "../../api";
import RatingImage from "../../image/star.svg"
import Button from "../../../../shared/buttons/button";

interface Props {
    items: Product[] | undefined 
}


export const ProductCard = (props:Props) => {


    return (
        
        <>
            <View style={page.container}>
                <View>
                    {props.items?.map( product => 
                    <View 
                        key={product.id}
                        style={[page.wrapper,  page.shadowProp]}>

                        <View style={page.imageBlock}>
                            <Image  
                                style = {page.image}
                                source = {{
                                    uri: product.img
                                }}
                            />
                            <Button onPress={()=> {}} title="" style={page.addFaforites} favorites={false}/>
                        </View>
                        
                        <View >
                            <Text style={page.title}>{product.name}</Text>
                            <View style={page.info}>
                                <Text>{product.category}</Text>
                                <View style={page.icon}></View>
                                <Text>{product.rating}</Text>
                                <RatingImage width={12} height={12} />
                            </View>
                            
                            <Text>{product.price}</Text>
                            
                        </View>
                        

                        
                    </View>)}
                </View>
                
                
            </View>
            
        </>
    ) 
}


