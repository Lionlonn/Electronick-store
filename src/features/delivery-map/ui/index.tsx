import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button, Alert } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';

const API_KEY = "aa21e946f82e433ab2a519f75932f4f4";

type Location = {
    latitude: number;
    longitude: number;
} | null;

export const DeliveryMap = () => {
    const [city, setCity] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [house, setHouse] = useState<string>('');
    const [location, setLocation] = useState<Location>(null);

    const geocode = async (address: string) => {
        try {
            const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY}`);
            if (response.data.results.length > 0) {
                const location = response.data.results[0].geometry;
                setLocation({
                    latitude: location.lat,
                    longitude: location.lng
                });
            } else {
                Alert.alert('Адрес не найден', 'Попробуйте ввести другой адрес.');
            }
        } catch (error) {
            console.error(error);
            Alert.alert('Ошибка', 'Произошла ошибка при поиске адреса.');
        }
    };

    const handleAddressSubmit = () => {
        const address = `${house} ${street}, ${city}`;
        geocode(address);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Город"
                value={city}
                onChangeText={setCity}
            />
            <TextInput
                style={styles.input}
                placeholder="Улица"
                value={street}
                onChangeText={setStreet}
            />
            <TextInput
                style={styles.input}
                placeholder="Дом"
                value={house}
                onChangeText={setHouse}
            />
            <Button title="Найти адрес" onPress={handleAddressSubmit} />
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 55.5940336,
                    longitude: 72.3742793,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                region={
                    location
                        ? {
                            latitude: location.latitude,
                            longitude: location.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }
                        : undefined
                }
            >
                {location && (
                    <Marker
                        coordinate={{
                            latitude: location.latitude,
                            longitude: location.longitude
                        }}
                        title="Выбранный адрес"
                    />
                )}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '80%',
    },
    map: {
        width: '100%',
        height: 400,
    },
});
