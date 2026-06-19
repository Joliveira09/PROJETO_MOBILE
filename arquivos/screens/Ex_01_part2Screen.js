import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';


export default function Ex_01_part2Screen() {

    const [nome, setNome] = useState('');
    const[idade, setIdade] = useState('');
    const[resultado, setResultado] = useState('');

    return (
        <View style={styles.container}>
            <TextInput value={nome} style={styles.input} onChangeText={setNome} placeholder='Digite seu Nome'></TextInput>


        <TextInput style={styles.input} value={idade} onChangeText={setIdade} keyboardType="numeric" placeholder='Digite sua Idade'></TextInput>


        <Button title="Enviar" onPress={() => setResultado(`Nome: ${nome}, Idade: ${idade}`)} />


        <View style={styles.resultadoContainer}>
            <Text style={styles.resultado}>
                {resultado}
            </Text>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },

  resultadoContainer: {
    marginTop: 25,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  resultado: {
    fontSize: 18,
    textAlign: 'center',
  },
});