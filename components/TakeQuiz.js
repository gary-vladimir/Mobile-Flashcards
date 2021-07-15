import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function TakeQuiz() {
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
                        Quiz
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Play_400Regular',
                            color: '#457B9D',
                        }}
                    >
                        2/4
                    </Text>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>Take a Guess!</Text>
                <View style={styles.card}>
                    <Text style={styles.question}>What is 117 name?</Text>

                    <TouchableOpacity style={{ marginTop: 170 }}>
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

                    <Text style={styles.myGuessTxt}>My guess was:</Text>

                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <TouchableOpacity
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

export default TakeQuiz;
