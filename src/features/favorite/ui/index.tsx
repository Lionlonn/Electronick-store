import * as React from 'react';
import { Button, IconButton } from 'react-native-paper'
import Favorite from '../../Image/heart.svg'

interface Props {
  toggleFavorite: () => void | undefined,
  isFavorite: boolean
}


export default function Faforite(props:Props) {
  return (
    <IconButton mode='outlined' icon={Favorite} style={[{
      width: 32,
      height: 32,
      backgroundColor: props.isFavorite ? 'red' : "#FFF",
      borderColor: "#FFF"
    }]} onPress={props.toggleFavorite}/>
  )
}