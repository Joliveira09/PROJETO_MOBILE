import { View, Text, StyleSheet } from "react-native";
import { colors } from "./src/theme/colors";
import React, { useState, useEffect } from 'react';
import Splash from './src/screens/splash/index';
import Login from './src/screens/login/index';


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


  return <Login />;
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