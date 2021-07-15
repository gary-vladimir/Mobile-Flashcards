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

function AddCard() {
    const navigation = useNavigation();

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

export default AddCard;
