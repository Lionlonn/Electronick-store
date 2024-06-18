import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Image, Keyboard } from 'react-native';
import YaMap, { Marker, Geocoder } from 'react-native-yamap';

YaMap.init('c330a73d-3750-4bc6-a048-5cb17e539dd0');
Geocoder.init('79a9313d-8f4b-44c4-aa2e-d2aebbbdd5f0');


interface DeliveryMapProps {
    address: string;
}

export const DeliveryMap:React.FC<DeliveryMapProps> = ({address}) => {
    const [coordinates, setCoordinates] = useState<{ lat: number, lon: number } | null>({lat: 56.094731, lon: 43.512434});

    useEffect(() => {
        const handlePress = async () => {
            try {
                const response = await Geocoder.addressToGeo(address);
                console.log(response)
                if (response) {
                    const { lat, lon } = response;
                    setCoordinates({ lat, lon });
                    console.log(coordinates)
                }
            } catch (error) {
                Alert.alert('Ошибка', 'Не удалось получить координаты');
            }
        };

        if (address) handlePress();
    }, [address])

    return (
        <View style={styles.container}>
            {coordinates && 
                <YaMap
                    nightMode={true}
                    initialRegion={{
                        lat: coordinates.lat,
                        lon: coordinates.lon,
                        zoom: address ? 18 : 10,
                        azimuth: 80,
                        tilt: 50
                    }}
                style={{ flex: 1}}
                >
                {address && (
                    <Marker
                        anchor={{x: 0.5, y: 1.3}} 
                        children={<Image
                            style={{width: 25, height: 25}}
                            source={require('../images/icons8-location-48.png')}
                        />}
                        point={{ lat: coordinates.lat, lon: coordinates.lon }}
                    />
                )}
                </YaMap>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        flex: 1
    },
    input: {
        width: '100%',
        height: 60,
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
