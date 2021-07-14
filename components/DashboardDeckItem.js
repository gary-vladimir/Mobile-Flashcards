import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';
import {
    useFonts,
    Play_400Regular,
    Play_700Bold,
} from '@expo-google-fonts/play';
import { useNavigation } from '@react-navigation/native';

function DashboardDeckItem(props) {
    const navigation = useNavigation();
    const scaleAnim = useRef(new Animated.Value(1)).current;
    /* font */
    let [fontsLoaded, error] = useFonts({
        Play_400Regular,
    });

    const scaleUp = () => {
        Animated.timing(scaleAnim, {
            toValue: 1.2,
            duration: 50,
            useNativeDriver: true,
        }).start(() => scaleDown());
    };
    const scaleDown = () => {
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 50,
            useNativeDriver: true,
        }).start(() => clickHandle());
    };

    const clickHandle = () => {
        console.log(props.id, 'clicked!');
        navigation.navigate('Deck', props.id);
    };

    return !fontsLoaded ? (
        <Text />
    ) : (
        <TouchableWithoutFeedback onPress={scaleUp}>
            <Animated.View
                style={[styles.card, { transform: [{ scale: scaleAnim }] }]}
            >
                <Text style={styles.title}>{props.name}</Text>
                <Text style={styles.numOfCards}>
                    {props.numberOfCards} cards
                </Text>
            </Animated.View>
        </TouchableWithoutFeedback>
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
