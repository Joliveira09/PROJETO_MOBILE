import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import Ex01Screen from './screens/Ex01Screen';
import Ex_01_part2Screen from './screens/Ex_01_part2Screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
        />
        <Stack.Screen
          name="Ex01"
          component={Ex01Screen}
        />
        <Stack.Screen
          name="Ex_01_part2"
          component={Ex_01_part2Screen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}