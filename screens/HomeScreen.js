import { View, Text, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Tela Home</Text>

      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Details')}
      />

      <Button title="Ir para Ex01"
      onPress={() => navigation.navigate('Ex01')}
      />
    </View>
  );
}