import React from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";
import Swiper from 'react-native-swiper'
import {Dimensions} from 'react-native';

interface Props {
   images: string[];
   selectedImageIndex: number;
}

const windowHeight = Dimensions.get('window').height;

export const ImagesSwiper = (props: Props) => {
   
   return (
        <Swiper 
            style={styles.wrapper}
            showsButtons={false}
            showsPagination={true}
            dot={<View style={{width: 8, height: 8, backgroundColor:'rgb(193, 194, 184)', borderRadius: 8}}></View>}
            activeDot={<View style={{width: 8, height: 8, backgroundColor: 'rgb(206, 213, 91)', borderRadius: 8}}></View>}
            paginationStyle={{gap: 7}}
            index={props.selectedImageIndex}
         >

            {props.images.map((img, index) => (
               <View style={styles.slide1} key={index}> 
                 <Image 
                     style={{width: 200, height: 200}}
                     source={{
                        uri: img
                     }}
                  /> 
               </View>      
            ))}
             
               
            
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
    
    backgroundColor: 'rgb(244, 245, 247)',
    flex: 1
  },
  
})
