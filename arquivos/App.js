import 'react-native-gesture-handler'; // IMPORTANTE: Sempre a primeira linha
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import Ex01Screen from './screens/Ex01Screen';
import Ex_01_part2Screen from './screens/Ex_01_part2Screen';
import Ex_02_part2Screen from './screens/Ex_02_part2Screen';
import Ex_03Screen from './screens/Ex_03Screen';
import Ex_03_part2Screen from './screens/Ex_03_part2Screen';
import Ex_03_part3Screen from './screens/Ex_03_part3Screen';
import Ex_03_part4Screen from './screens/Ex_03_part4Screen';
import Ex_03_part6Screen from './screens/Ex_03_part6Screen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Estrutura do Drawer para o Exercício 2
function MenuEx02() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="Ex02_Home" 
        component={Ex_02_part2Screen} 
        options={{ title: 'Exercício 2 - Principal' }} 
      />


    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailScreen} />
          <Stack.Screen name="Ex01" component={Ex01Screen} />
          <Stack.Screen name="Ex_01_part2" component={Ex_01_part2Screen} />
          <Stack.Screen name="Ex_03" component={Ex_03Screen} />
          <Stack.Screen name="Ex_03_part2" component={Ex_03_part2Screen} />
          <Stack.Screen name="Ex_03_part3" component={Ex_03_part3Screen} />
          <Stack.Screen name="Ex_03_part4" component={Ex_03_part4Screen} />
          <Stack.Screen name="Ex_03_part6" component={Ex_03_part6Screen} />



          <Stack.Screen
            name="Ex_02_part2"
            component={MenuEx02}
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}