import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import NewDeck from './components/NewDeck';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
                            return (
                                <Ionicons
                                    name={focused ? 'home' : 'home-outline'}
                                    size={size}
                                    color={color}
                                />
                            );
                        } else if (route.name === 'Add Deck') {
                            return (
                                <Ionicons
                                    name={
                                        focused
                                            ? 'add-circle'
                                            : 'add-circle-outline'
                                    }
                                    size={size}
                                    color={color}
                                />
                            );
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: '#E63946',
                    inactiveTintColor: '#1D3557',
                }}
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Add Deck" component={NewDeck} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
