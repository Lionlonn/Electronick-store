import React from "react";
import { Alert, Image, Text, View} from "react-native";
import { page } from '../card/style'
import { useSelector } from "react-redux";
import { useStateSelector } from "../../../../shared/hooks/hooks";
import { ProductItem } from "../../api";
import RatingImage from "../../image/star.svg"
import Faforite from "../../../../features/favorite/ui";
import { Button } from "react-native-paper";

interface Props {
    item: ProductItem,
    handleAddToFavorite: (product: ProductItem) => void,
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
                            <View style={page.addFaforites}><Faforite handleAddToFavorite={() => props.handleAddToFavorite(props.item)}/></View>
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

