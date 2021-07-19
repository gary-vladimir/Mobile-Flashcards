import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { clearLocalNotification, setLocalNotification } from '../utils/api';

function QuizResults(props) {
    useEffect(() => {
        clearLocalNotification().then(setLocalNotification);
    }, []);

    const navigation = useNavigation();

    const store = props.store;
    const thisDeckId = props.route.params.id;
    const numberOfCorrectAnswers = props.route.params.numberOfCorrectAnswers;
    const numberOfWrongAnswers = props.route.params.numberOfWrongAnswers;
    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.title}>Results</Text>
            <View style={[styles.card, styles.cardQuestions]}>
                <Text style={{ fontSize: 18, color: '#1D3557' }}>
                    Correctly answered questions:
                </Text>
                <View
                    style={[{ position: 'absolute', right: 20 }, styles.number]}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            color: '#1D3557',
                            fontWeight: 'bold',
                        }}
                    >
                        {numberOfCorrectAnswers}
                    </Text>
                </View>
            </View>
            <View style={[styles.card, styles.cardQuestions]}>
                <Text style={{ fontSize: 18, color: '#1D3557' }}>
                    Incorrectly answered questions:
                </Text>
                <View
                    style={[{ position: 'absolute', right: 20 }, styles.number]}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            color: '#1D3557',
                            fontWeight: 'bold',
                        }}
                    >
                        {numberOfWrongAnswers}
                    </Text>
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={[styles.card, styles.porcentage]}>
                    <Text style={styles.title}>
                        {Math.round(
                            (numberOfCorrectAnswers * 100) /
                                (numberOfWrongAnswers + numberOfCorrectAnswers)
                        )}
                        %
                    </Text>
                </View>
            </View>

            <View
                style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }}
            >
                <TouchableOpacity
                    style={[styles.card, styles.btns]}
                    onPress={() => {
                        navigation.navigate('TakeQuiz', { id: thisDeckId });
                    }}
                >
                    <Text
                        style={{
                            position: 'absolute',
                            top: 30,
                            color: '#1D3557',
                        }}
                    >
                        Restart Quiz
                    </Text>
                    <MaterialCommunityIcons
                        name="restore"
                        size={40}
                        color="#1D3557"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.card, styles.btns]}
                    onPress={() => {
                        navigation.navigate('Deck', { id: thisDeckId });
                    }}
                >
                    <Text
                        style={{
                            position: 'absolute',
                            top: 30,
                            color: '#1D3557',
                        }}
                    >
                        Back to Deck
                    </Text>
                    <MaterialIcons
                        name="exit-to-app"
                        size={40}
                        color="#1D3557"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#1D3557',
        fontWeight: 'bold',
        fontSize: 24,
    },
    card: {
        backgroundColor: 'white',
        /* box shadow */
        shadowColor: '#adb5bd',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
    },
    cardQuestions: {
        borderRadius: 20,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        padding: 20,
        marginVertical: 15,
    },
    number: {
        backgroundColor: '#A8DADC',
        width: 50,
        height: 50,
        borderRadius: 25,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    porcentage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btns: {
        width: 150,
        height: 150,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
});

function mapStateToProps(state) {
    return {
        store: state,
    };
}

export default connect(mapStateToProps)(QuizResults);
