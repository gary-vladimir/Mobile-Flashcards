import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from 'react-native';
import {
    useFonts,
    Play_400Regular,
    Play_700Bold,
} from '@expo-google-fonts/play';

function DashboardDeckItem(props) {
    const fadeAnim = useRef(new Animated.Value(1)).current;
    /* font */
    let [fontsLoaded, error] = useFonts({
        Play_400Regular,
    });

    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 3000,
        }).start();
    };

    return !fontsLoaded ? (
        <Text />
    ) : (
        <TouchableOpacity onPress={fadeOut}>
            <Animated.View style={[styles.card, { opacity: fadeAnim }]}>
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.numOfCards}>
                    {props.numberOfCards} cards
                </Text>
            </Animated.View>
        </TouchableOpacity>
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
        height: 150,
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
