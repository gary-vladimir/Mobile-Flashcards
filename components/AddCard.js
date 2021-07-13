import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';

function AddCard() {
    return (
        <View style={styles.card}>
            <Text style={styles.label}>Question:</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Answer:</Text>
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
        backgroundColor: '#A8DADC',
        height: 45,
        width: 300,
        borderRadius: 25,
    },
});

export default AddCard;
