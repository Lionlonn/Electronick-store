import React from "react";
import { Alert, Image, Text, View} from "react-native";
import { page } from '../card/style'
import { ProductItem } from "../../api";
import RatingImage from "../../image/star.svg"
import { Favorite } from "features/favorite"


interface Props {
    item: ProductItem,
    handleToggleFavorite: (product: ProductItem) => void,
    isFavorite: boolean
}


export const ProductCard = (props:Props) => {
    const {name, category, id, price, rating, img} = props.item
    
   

    
    
    return (
        
        <>  
            <View style={page.container}>
                <View>
                <View 
                        key={id}
                        style={[page.wrapper,  page.shadowProp]}>

                        <View style={page.imageBlock}>
                            <Image  
                                style = {page.image}
                                source = {{
                                    uri: img
                                }}
                            />
                            <View style={page.addFaforites}><Favorite 
                                toggleFavorite={() => {props.handleToggleFavorite(props.item)}}
                                isFavorite={props.isFavorite}

                            /></View>
                        </View>
                        
                        <View >
                            <Text style={page.title}>{name}</Text>
                            <View style={page.info}>
                                <Text>{category}</Text>
                                <View style={page.icon}></View>
                                <Text>{rating}</Text>
                                <RatingImage width={12} height={12} />
                            </View>
                            
                            <Text>{price}</Text>
                            
                        </View>
                        

                        
                    </View>
                </View>
                
                
            </View>
            
        </>
    ) 
}

