import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

function generateUID() {
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    );
}

function NewDeck(props) {
    const navigation = useNavigation();

    const [textInputValue, setTextInputValue] = React.useState('');
    const handleChange = (event) => {
        setTextInputValue(event.target.value);
    };
    const handleChangeText = (value) => {
        setTextInputValue(value);
    };

    console.log(textInputValue);

    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.title}>New Deck</Text>
            <View style={styles.card}>
                <Text style={styles.questionTxt}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={styles.input}
                    // onChange={handleChange}
                    onChangeText={(text) => handleChangeText(text)}
                    value={textInputValue}
                />
                <TouchableOpacity
                    disabled={textInputValue === '' ? true : false}
                    style={[
                        styles.btn,
                        textInputValue === ''
                            ? { backgroundColor: '#ced4da' }
                            : {
                                  backgroundColor: '#A8DADC',
                              },
                    ]}
                    onPress={() => {
                        if (textInputValue !== '') {
                            const txt = textInputValue;
                            handleChangeText('');
                            let id = generateUID();
                            props.dispatch({
                                type: 'ADD_DECK',
                                deck: {
                                    id: id,
                                    title: txt,
                                    cards: [],
                                },
                            });
                            navigation.navigate('Deck', { id: id });
                        }
                    }}
                >
                    <Text
                        style={[
                            {
                                fontWeight: 'bold',
                                fontSize: 20,
                            },
                            textInputValue === ''
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
    title: {
        color: '#1D3557',
        fontWeight: 'bold',
        fontSize: 24,
    },
    card: {
        marginVertical: 10,
        backgroundColor: 'white',
        height: 350,
        borderRadius: 20,
        /* box shadow */
        shadowColor: '#adb5bd',
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        /* center content */
        display: 'flex',
        alignItems: 'center',

        paddingTop: 50,
    },
    questionTxt: {
        width: 250,
        color: '#1D3557',
        fontSize: 24,
        textAlign: 'center',
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
    btn: {
        marginTop: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: 300,
        borderRadius: 25,
    },
});

function mapStateToProps(state) {
    return {
        store: state,
    };
}

export default connect(mapStateToProps)(NewDeck);
