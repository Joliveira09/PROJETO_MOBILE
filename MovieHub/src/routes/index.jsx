import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/login/index';
import Cadastro from '../screens/cadastro/index';
import TabRoutes from './tab.routes';
import AddMovies from '../screens/addMovies/index';
import Search from '../screens/search/index';
import InfoMovies from '../screens/infoMovies/index';
import Filter from '../screens/filter/index';
import { Movie } from '../screens/movies/index';


export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  Home: undefined;
  addMovies: undefined;
  Search: undefined;
  infoMovies: { movie: Movie };
  Filter: undefined;
  CompartilharMovies: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen name="addMovies" component={AddMovies} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="infoMovies" component={InfoMovies} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="CompartilharMovies" component={CompartilharMovies} />
    </Stack.Navigator>
  );
}