import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import YaMap, { Marker, Geocoder } from 'react-native-yamap';

YaMap.init('c330a73d-3750-4bc6-a048-5cb17e539dd0');
Geocoder.init('79a9313d-8f4b-44c4-aa2e-d2aebbbdd5f0');

export const DeliveryMap = () => {
    const [address, setAddress] = useState<string>('');
    const [coordinates, setCoordinates] = useState<{ lat: number, lon: number } | null>(null);

    const handleAddressChange = (text: string) => {
        setAddress(text);
    };

    const handlePress = async () => {
        try {
            const response = await Geocoder.addressToGeo(address);
            console.log(response)
            if (response) {
                const { lat, lon } = response;
                setCoordinates({ lat, lon });
            } else {
                Alert.alert('Ошибка', 'Не удалось получить координаты');
            }
        } catch (error) {
            Alert.alert('Ошибка', 'Не удалось получить координаты');
        }
    };

    return (
        <View style={styles.container}>
            <YaMap
                initialRegion={{
                    lat: 56.094731,
                    lon: 43.512434,
                    zoom: 10,
                    azimuth: 80,
                    tilt: 100
                }}
                style={{ flex: 1 }}
            >
                {coordinates && (
                    <Marker
                        scale={3}
                        point={{ lat: coordinates.lat, lon: coordinates.lon }}
                    />
                )}
            </YaMap>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Введите адрес"
                    value={address}
                    onChangeText={handleAddressChange}
                />
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Найти адрес</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        flexDirection: 'row',
        zIndex: 1,
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 10,
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

