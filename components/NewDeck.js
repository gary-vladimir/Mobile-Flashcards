import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function NewDeck() {
    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.title}>New Deck</Text>
            <View style={styles.card}>
                <Text style={styles.questionTxt}>
                    What is the title of your new deck?
                </Text>
                <TextInput style={styles.input} />
                <TouchableOpacity style={styles.btn}>
                    <Text
                        style={{
                            color: '#457B9D',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}
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
        width: 186,
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
        backgroundColor: '#A8DADC',
        height: 45,
        width: 300,
        borderRadius: 25,
    },
});

export default NewDeck;
