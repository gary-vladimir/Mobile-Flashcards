import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import DashboardDeckItem from './DashboardDeckItem';

function Home() {
    return (
        <ScrollView style={{ padding: 20 }}>
            <Text style={styles.title}>Decks</Text>
            <DashboardDeckItem name="Javascript" numberOfCards={5} />
            <DashboardDeckItem name="Marvel" numberOfCards={3} />
            <DashboardDeckItem name="Star Wars" numberOfCards={4} />
            <DashboardDeckItem name="Halo 4" numberOfCards={8} />
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

export default Home;
