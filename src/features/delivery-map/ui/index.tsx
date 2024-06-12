import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text,} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';





export const DeliveryMap = () => {
    
    
    
    
    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 58.709127,
                    longitude: 11.934746,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: '100%',
        
        
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    }
})