import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function NewDeck() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.title}>New Deck</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#1D3557',
        fontWeight: 'bold',
        fontSize: 24,
    },
});

export default NewDeck;
