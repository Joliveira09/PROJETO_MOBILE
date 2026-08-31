import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/home/index';
import { colors } from '../theme/colors';
import Movies from '../screens/movies';
import Favorites from '../screens/favorites/index';
import Perfil from '../screens/perfil/index';
import { View } from 'react-native';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
    return (

        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: '#888',
                tabBarStyle: {
                    backgroundColor: colors.cardBackground,
                    borderTopWidth: 0,
                    height: 70,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Filmes"
                component={Movies}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="film-outline" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Favoritos"
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" size={size} color={color} />
                    ),
                }}
            />

            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>

    );
}