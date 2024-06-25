import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'
export const LoadingIndicator = () => (
    <View style={styles.loadingContainer}>
        <LottieView 
            source={require('../animation/anim.json')}
            autoPlay
            loop
            style={{width: '100%', height: 300}}
        />
    </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex:2,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
});


