import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DashboardDeckItem() {
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
