import { View, Text, StyleSheet } from "react-native";
import { colors } from "./src/theme/colors";
import React, { useState, useEffect } from 'react';
import Splash from './src/screens/splash/index';
import Login from './src/screens/login/index';
import Cadastro from './src/screens/cadastro/index';
import addMovies from './src/screens/addMovies/index';
import Search from './src/screens/search/index';
import Filter from "./src/screens/filter/index";
import InfoMovies from './src/screens/infoMovies/index';
import Editar from "./src/screens/editar/index";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabRoutes from './src/routes/tab.routes';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={TabRoutes} />
        <Stack.Screen name="addMovies" component={addMovies} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Filter" component={Filter} />
        <Stack.Screen name="infoMovies" component={InfoMovies} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}