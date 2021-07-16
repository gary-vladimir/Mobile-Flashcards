import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

function AddCard(props) {
    const navigation = useNavigation();

    const thisDeckId = props.route.params.id;
    const [questionInput, setQuestionInput] = React.useState('');
    const [answerInput, setAnswerInput] = React.useState('');

    const handleChangeTextAnswer = (value) => {
        setAnswerInput(value);
    };
    const handleChangeTextQuestion = (value) => {
        setQuestionInput(value);
    };

    console.log(questionInput, answerInput, thisDeckId);

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
                        Add Card
                    </Text>
                </View>
            </View>
            <View style={styles.card}>
                <Text style={styles.label}>Question:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleChangeTextQuestion(text)}
                />
                <Text style={styles.label}>Answer:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleChangeTextAnswer(text)}
                />

                <TouchableOpacity
                    disabled={
                        answerInput === '' || questionInput === ''
                            ? true
                            : false
                    }
                    style={[
                        styles.btn,
                        answerInput === '' || questionInput === ''
                            ? { backgroundColor: '#ced4da' }
                            : {
                                  backgroundColor: '#A8DADC',
                              },
                    ]}
                    onPress={() => {
                        if (answerInput !== '' && questionInput !== '') {
                            const answer = answerInput;
                            const question = questionInput;
                            navigation.goBack();
                            props.dispatch({
                                type: 'ADD_CARD',
                                card: {
                                    question: question,
                                    answer: answer,
                                },
                                deck: thisDeckId,
                            });
                        }
                    }}
                >
                    <Text
                        style={[
                            {
                                fontWeight: 'bold',
                                fontSize: 20,
                            },
                            answerInput === '' || questionInput === ''
                                ? { color: '#adb5bd' }
                                : { color: '#457B9D' },
                        ]}
                    >
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        height: 350,
        /* box shadow */
        shadowColor: '#adb5bd',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,

        display: 'flex',
        alignItems: 'center',
    },
    input: {
        textAlign: 'center',
        backgroundColor: '#F1F1F1',
        marginTop: 20,
        height: 45,
        width: 300,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    label: {
        width: 300,
        color: '#1D3557',
        fontSize: 24,
        marginTop: 15,
    },
    btn: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 300,
        borderRadius: 25,
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

export default connect(mapStateToProps)(AddCard);
