import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

function QuizResults(props) {
    const store = props.store;
    const thisDeckId = props.route.params.id;
    const numberOfCorrectAnswers = props.route.params.numberOfCorrectAnswers;
    const numberOfWrongAnswers = props.route.params.numberOfWrongAnswers;
    return (
        <View>
            <Text>Results</Text>
            <View>
                <Text>Correctly answered questions:</Text>
                <View>
                    <Text>{numberOfCorrectAnswers}</Text>
                </View>
            </View>
            <View>
                <Text>Incorrectly answered questions:</Text>
                <View>
                    <Text>{numberOfWrongAnswers}</Text>
                </View>
            </View>
            <View>
                <Text>
                    {Math.round(
                        (numberOfCorrectAnswers * 100) /
                            (numberOfWrongAnswers + numberOfCorrectAnswers)
                    )}
                    %
                </Text>
            </View>

            <View>
                <Text>Restart Quiz</Text>
                <MaterialCommunityIcons
                    name="restore"
                    size={24}
                    color="black"
                />
            </View>
            <View>
                <Text>Back to Deck</Text>
                <MaterialIcons name="exit-to-app" size={24} color="black" />
            </View>
        </View>
    );
}

function mapStateToProps(state) {
    return {
        store: state,
    };
}

export default connect(mapStateToProps)(QuizResults);
