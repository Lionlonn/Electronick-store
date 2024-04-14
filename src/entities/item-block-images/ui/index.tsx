import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native';

interface Props {
   images: string;
}

const windowHeight = Dimensions.get('window').height;
const images = ["https://i.pinimg.com/564x/4b/0c/56/4b0c56db0c048f1a5d9382db5b82d535.jpg" , "https://i.pinimg.com/564x/4b/0c/56/4b0c56db0c048f1a5d9382db5b82d535.jpg" ]

export const ItemImagesBlock = (props: Props) => {
   let img
   for (const str of props.images) {
      img = str
   }
   
   
   return (
        <Swiper 
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={true}
            dot={<View style={{width:10, height:10, backgroundColor:'green'}}></View>}
            activeDot={<View style={{width: 20, height: 20, backgroundColor: 'red'}}></View>}
            // containerStyle={{height: '50%', width: '100%', backgroundColor: 'orange'}}
         >

            
             <View style={styles.slide1}> 
                 <Image 
                     style={{width: 200, height: 200}}
                     source={{
                        uri: img
                     }}
                  /> 
            </View>
               
            
      </Swiper>
   ) 
}

const styles = StyleSheet.create({
  wrapper: {
      height: (windowHeight / 2),
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    
    backgroundColor: '#9DD6EB',
    flex: 1
  },
  
})
