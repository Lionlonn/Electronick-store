import * as React from 'react';
import { Button, IconButton } from 'react-native-paper'
import Heart from '../../image/heart.svg'

interface Props {
  toggleFavorite: () => void | undefined,
  isFavorite: boolean
}


export function Favorite(props:Props) {
  return (
    <IconButton mode='outlined' icon={Heart} style={[{
      width: 32,
      height: 32,
      backgroundColor: props.isFavorite ? 'red' : "#FFF",
      borderColor: "#FFF"
    }]} onPress={props.toggleFavorite}/>
  )
}