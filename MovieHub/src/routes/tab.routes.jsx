import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/home/index';
import { colors } from '../theme/colors';
import Movies from '../screens/movies';
import InfoMovies from '../screens/infoMovies';
import Favorites from '../screens/favorites/index';
import Perfil from '../screens/perfil/index';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// 1. Stack interno para a aba de Filmes
function MoviesStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="moviesList" component={Movies} />
            <Stack.Screen name="infoMovies" component={InfoMovies} />
        </Stack.Navigator>
    );
}

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

            {/* 2. Alterado 'component' de Movies para MoviesStack */}
            <Tab.Screen
                name="Filmes"
                component={MoviesStack}
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