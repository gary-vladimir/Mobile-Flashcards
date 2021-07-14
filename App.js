import * as React from 'react';
import { Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import NewDeck from './components/NewDeck';
import AddCard from './components/AddCard';
import TakeQuiz from './components/TakeQuiz';
import Constants from 'expo-constants';
import Deck from './components/Deck';
import { createStackNavigator } from '@react-navigation/stack';
import {
    useFonts,
    Play_400Regular,
    Play_700Bold,
} from '@expo-google-fonts/play';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function CustomStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    );
}
function Dashboard() {
    /* font */
    let [fontsLoaded, error] = useFonts({
        Play_400Regular,
    });
    return (
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
    );
}

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <CustomStatusBar
                        backgroundColor={'#8d99ae'}
                        barStyle="light-content"
                    />
                    <Stack.Navigator>
                        <Stack.Screen
                            name="Dashboard"
                            options={{ headerShown: false }}
                            component={Dashboard}
                        />
                        <Stack.Screen
                            name="Deck"
                            options={headerOptions(4, 'Halo 4')}
                            component={Deck}
                        />
                        <Stack.Screen
                            name="AddCard"
                            options={headerOptions(4, 'Add Card')}
                            component={AddCard}
                        />
                        <Stack.Screen
                            name="TakeQuiz"
                            options={headerOptions(4, 'Take Quiz')}
                            component={TakeQuiz}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        );
    }
}

const headerOptions = (numCards, title) => {
    return {
        headerTitle: (
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        color: '#1D3557',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        color: '#457B9D',
                        fontFamily: 'Play_400Regular',
                    }}
                >
                    {numCards} cards
                </Text>
            </View>
        ),
        headerBackImage: () => (
            <Ionicons
                name="arrow-back-outline"
                style={{
                    fontSize: 35,
                    marginLeft: 15,
                    color: '#1D3557',
                }}
            />
        ),
        headerBackTitleVisible: false,
        headerStyle: {
            height: 100,
            shadowColor: '#adb5bd',
            shadowOffset: { width: 0, height: 0.2 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 5,
        },
    };
};
