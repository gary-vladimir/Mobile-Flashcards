import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import {
    useFonts,
    Play_400Regular,
    Play_700Bold,
} from '@expo-google-fonts/play';

function DashboardDeckItem() {
    let [fontsLoaded, error] = useFonts({
        Play_400Regular,
    });
    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <View style={styles.card}>
            <Text style={styles.title}>Star Wars</Text>
            <Text style={styles.numOfCards}>5 cards</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#1D3557',
        fontSize: 24,
    },
    numOfCards: {
        color: '#457B9D',
        fontFamily: 'Play_400Regular',
    },
    card: {
        marginVertical: 10,
        backgroundColor: 'white',
        height: 180,
        borderRadius: 20,
        /* box shadow */
        shadowColor: '#adb5bd',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        /* center content */
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DashboardDeckItem;
