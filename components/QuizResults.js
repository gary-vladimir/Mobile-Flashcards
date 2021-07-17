import React from 'react';
import { View, Text } from 'react-native';

function QuizResults(props) {
    const thisDeckId = props.route.params.id;
    const numberOfCorrectAnswers = props.route.params.numberOfCorrectAnswers;
    const numberOfWrongAnswers = props.route.params.numberOfWrongAnswers;
    return (
        <View>
            <Text>this is the results</Text>
            <Text>
                deck: {thisDeckId} had: {numberOfCorrectAnswers} correct
                answers, and {numberOfWrongAnswers} incorrect answers
            </Text>
        </View>
    );
}
export default QuizResults;
