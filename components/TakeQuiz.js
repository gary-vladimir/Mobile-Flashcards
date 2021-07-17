import React, { useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Animated,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

function TakeQuiz(props) {
    const navigation = useNavigation();
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const thisDeckId = props.route.params.id;
    const cards = props.store[thisDeckId].cards;

    const [index, setIndex] = React.useState(0);
    const [showAnswer, setStatus] = React.useState('false');
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] =
        React.useState(0);
    const [numberOfWrongAnswers, setNumberOfWrongAnswers] = React.useState(0);

    function moveToNextQuestion() {
        scaleUp();
        setStatus('false');
        if (index + 1 !== cards.length) {
            setIndex(index + 1);
        } else {
            setIndex(index);
            console.log('user completed quiz');
        }
    }

    /* animation */

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
        }).start();
    };

    console.log(showAnswer, numberOfWrongAnswers, numberOfCorrectAnswers);
    return (
        <View>
            <View style={styles.navBar}>
                <TouchableOpacity
                    style={{ marginLeft: 15 }}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="arrowleft" size={40} color="#1D3557" />
                </TouchableOpacity>
                <View style={{ marginLeft: 10 }}>
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: 'bold',
                            color: '#1D3557',
                        }}
                    >
                        Quiz
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Play_400Regular',
                            color: '#457B9D',
                        }}
                    >
                        {index + 1}/{cards.length}
                    </Text>
                </View>
            </View>

            <Animated.View
                style={{ padding: 20, transform: [{ scale: scaleAnim }] }}
            >
                <Text style={styles.title}>Take a Guess!</Text>
                <View style={styles.card}>
                    <Text style={styles.question}>{cards[index].question}</Text>

                    {showAnswer === 'false' ? (
                        <TouchableOpacity
                            style={{ marginTop: 170 }}
                            onPress={() => setStatus('true')}
                        >
                            <Text
                                style={{
                                    color: '#FF7A00',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}
                            >
                                View Answer
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <View style={{ marginTop: 170 }}>
                            <Text
                                style={{
                                    color: '#4895ef',
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                }}
                            >
                                {cards[index].answer}
                            </Text>
                        </View>
                    )}

                    <Text style={styles.myGuessTxt}>My guess was:</Text>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => {
                                moveToNextQuestion();
                                setNumberOfWrongAnswers(
                                    numberOfWrongAnswers + 1
                                );
                            }}
                            style={[styles.btn, { backgroundColor: '#FFAEB4' }]}
                        >
                            <Text
                                style={{
                                    color: '#E63946',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Incorrect
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                moveToNextQuestion();
                                setNumberOfCorrectAnswers(
                                    numberOfCorrectAnswers + 1
                                );
                            }}
                            style={[styles.btn, { backgroundColor: '#91DFD6' }]}
                        >
                            <Text
                                style={{
                                    color: '#2A9D8F',
                                    fontWeight: 'bold',
                                    fontSize: 20,
                                }}
                            >
                                Correct
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Animated.View>
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
        height: 400,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 10,
        /* box shadow */
        shadowColor: '#adb5bd',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        /* center content */
        display: 'flex',
        alignItems: 'center',
    },
    question: {
        position: 'absolute',
        textAlign: 'center',
        color: '#1D3557',
        fontSize: 24,
        width: 200,
        top: 30,
    },
    myGuessTxt: {
        color: '#1D3557',
        fontSize: 20,
        marginTop: 90,
    },
    btn: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 150,
        borderRadius: 25,
        marginHorizontal: 5,
    },
    navBar: {
        backgroundColor: 'white',
        display: 'flex',
        alignSelf: 'stretch',
        flexDirection: 'row',
        /* box shadow */
        shadowColor: '#adb5bd',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,

        marginBottom: 10,
        height: 100,
        alignItems: 'center',
    },
});

function mapStateToProps(state) {
    return {
        store: state,
    };
}

export default connect(mapStateToProps)(TakeQuiz);
