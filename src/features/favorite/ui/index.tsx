import * as React from 'react';
import { Button, Icon, IconButton } from 'react-native-paper'
import Heart from 'features/favorite/image/heart.svg'
import HeartCart from 'features/favorite/image/heart-border.svg'
import { ProductItem } from 'src/entities/product';
import { useAppDispatch } from 'src/shared/hooks';
import { addToFavorite, removeFromFavorite } from '../model';
import { StyleSheet } from 'react-native';

export interface FavoriteProps {
  type: 'mainIcon' | 'cartIcon'
  isFavorite: boolean,
  product: ProductItem
}

export const Favorite: React.FC<FavoriteProps> = ({type, isFavorite, product}) => {
  const dispatch = useAppDispatch()

  const handleToggleFavorite = (product: ProductItem) => {
    isFavorite 
    ? dispatch(removeFromFavorite(product)) 
    : dispatch(addToFavorite(product))
  }
  
  const Icon = {
    'mainIcon': Heart,
    'cartIcon': HeartCart,
  }
  const sizeButton = {
    'mainIcon': 32,
    'cartIcon': 60,
  }

  return (
    <IconButton 
      mode='outlined' 
      icon={Icon[type]} 
      style={
        [
          styles.button, 
          { 
            width: sizeButton[type],
            height: sizeButton[type],
            backgroundColor: isFavorite ? '#FF0000' : "#FFF"
          }
        ]
      }
      onPress={() => {handleToggleFavorite(product)}}/>
  )
}


const styles = StyleSheet.create({
  button: {
    minWidth: 32,
    minHeight: 32,
    borderColor: "#FFF",
    borderRadius: 100
  }
})