import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Deck() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text>Take Quiz</Text>
            </View>
            <View style={styles.card}>
                <Text>Add Card</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        marginTop: 30,
        backgroundColor: 'white',
        width: 175,
        height: 175,
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
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Deck;
