import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { ImagesSwiper } from "src/entities/item-block-images/ui/center-block";
import { RightItemImageBlock } from "src/entities/item-block-images/ui/right-block";

interface Props {
    route: any
}

export const ViewItemImagesBlock = (props: Props) => {
    const [ selectedImageIndex, setSelectedImageIndex ] = useState<number>(0)
    const img = props.route.params.item.img

    const handleSelectedImageIndex = (index: number) => {
        setSelectedImageIndex(index)
    }

    console.log(selectedImageIndex)

    return (
        <View style={styles.container}>
            <View style={styles.centerImage}>
                <ImagesSwiper 
                    images={img}
                    selectedImageIndex={selectedImageIndex}
                    onImageIndex={handleSelectedImageIndex} />

                <View style={styles.rightImage}>
                    <RightItemImageBlock 
                        images={img}
                        onImageIndex={handleSelectedImageIndex}
                        selectedImage={selectedImageIndex}/>
                </View>
            </View> 
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
          
    },
    centerImage: {
      position: 'relative',
      alignItems: 'flex-end',
      justifyContent:"center",
      marginRight: 24
    },
    rightImage: {
      position: 'absolute'
    }
})