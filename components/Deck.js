import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function DeckItem(props) {
    const link = props.linkTo;
    const navigation = useNavigation();
    const scaleAnim = useRef(new Animated.Value(1)).current;

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
        console.log('click!');
        navigation.navigate(link);
    };

    return (
        <TouchableWithoutFeedback onPress={scaleUp}>
            <Animated.View
                style={[styles.card, { transform: [{ scale: scaleAnim }] }]}
            >
                <Text style={styles.titles}>{props.title}</Text>
                <FontAwesome5 name={props.iconName} size={50} color="#1D3557" />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

function Deck() {
    return (
        <View style={styles.container}>
            <DeckItem
                title="Add Card"
                iconName="envelope-open-text"
                linkTo="AddCard"
            />
            <DeckItem title="Take Quiz" iconName="pen-alt" linkTo="TakeQuiz" />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 10,
        backgroundColor: 'white',
        width: 210,
        height: 210,
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
        marginTop: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titles: {
        position: 'absolute',
        top: 25,
        fontSize: 25,
        color: '#1D3557',
    },
});

export default Deck;
