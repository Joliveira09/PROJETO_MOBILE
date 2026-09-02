import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login/index';
import Cadastro from '../screens/cadastro/index';
import TabRoutes from './tab.routes';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      

      <Stack.Screen name="Cadastro" component={Cadastro} />
      
      <Stack.Screen name="Home" component={TabRoutes} />
    </Stack.Navigator>
  );
}