import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';

import YaMap from 'react-native-yamap';

YaMap.init('c330a73d-3750-4bc6-a048-5cb17e539dd0');

export const DeliveryMap = () => {
    

    return (
        <View style={styles.container}>
            <YaMap
                userLocationIcon={{ uri: 'https://www.clipartmax.com/png/middle/180-1801760_pin-png.png' }}
                initialRegion={{
                    lat: 50,
                    lon: 50,
                    zoom: 10,
                    azimuth: 80,
                    tilt: 100
                }}
                style={{ flex: 1, backgroundColor: 'red' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
});
