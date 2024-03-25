import * as React from 'react';
import { Button, IconButton } from 'react-native-paper'
import Heart from '../../image/heart.svg'
import { ProductItem } from 'src/entities/product';
import { useAppDispatch } from 'src/shared/hooks';
import { addToFavorite, removeFromFavorite } from '../model';

export interface FavoriteProps {
  isFavorite: boolean,
  product: ProductItem
}

export function Favorite(props:FavoriteProps) {
  const dispatch = useAppDispatch()

  const handleToggleFavorite = (product: ProductItem) => {
    props.isFavorite 
    ? dispatch(removeFromFavorite(product)) 
    : dispatch(addToFavorite(product))
  }
  

  return (
    <IconButton mode='outlined' icon={Heart} style={[{
      width: 32,
      height: 32,
      backgroundColor: props.isFavorite ? 'red' : "#FFF",
      borderColor: "#FFF"
    }]} onPress={() => {handleToggleFavorite(props.product)}}/>
  )
}