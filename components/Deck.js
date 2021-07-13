import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function Deck() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.titles}>Take Quiz</Text>
                <FontAwesome5 name="pen-alt" size={40} color="#1D3557" />
            </View>
            <View style={styles.card}>
                <Text style={styles.titles}>Add Card</Text>
                <FontAwesome5
                    name="envelope-open-text"
                    size={40}
                    color="#1D3557"
                />
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
    titles: {
        position: 'absolute',
        top: 25,
        fontSize: 20,
    },
});

export default Deck;
