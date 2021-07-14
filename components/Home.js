import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DashboardDeckItem from './DashboardDeckItem';
import { connect } from 'react-redux';

function Home(props) {
    let decks = props.decks;
    console.log(Object.keys(decks));
    return (
        <ScrollView style={{ padding: 20 }}>
            <Text style={styles.title}>Decks</Text>
            {Object.keys(decks).map(function (key, index) {
                return (
                    <DashboardDeckItem
                        name={decks[key].title}
                        numberOfCards={decks[key].cards.length}
                        id={decks[key].id}
                        key={decks[key].id}
                    />
                );
            })}
            <View style={{ height: 30 }} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#1D3557',
        fontWeight: 'bold',
        fontSize: 24,
    },
});

function mapStateToProps(state) {
    return {
        decks: state,
    };
}

export default connect(mapStateToProps)(Home);
