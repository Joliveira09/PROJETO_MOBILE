import { View, Text, StyleSheet } from "react-native";
import { colors } from "./src/theme/colors";
import React, { useState, useEffect } from 'react';
import Splash from './src/screens/splash/index';
import Login from './src/screens/login/index';
import Home from './src/screens/home/index';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
      <Stack.Navigator screenOptions={{ headerShown: false, }}>
        
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",

  },

  text: {
    color: colors.text,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 24,
  },
});