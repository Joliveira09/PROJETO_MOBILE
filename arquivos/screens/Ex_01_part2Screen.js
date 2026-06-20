import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  Platform // Importado para checar se é Web ou Mobile
} from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default function Ex_01_part2Screen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [cargo, setCargo] = useState('');
  const [manterConect, setManterConect] = useState(false);
  const [resultado, setResultado] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>

        <Text style={styles.titulo}>Cadastro</Text>

        <TextInput 
          value={email} 
          style={styles.input} 
          onChangeText={setEmail} 
          placeholder='Digite seu Email' 
          keyboardType="email-address" 
          autoCapitalize='none' 
          autoComplete='email' 
          autoCorrect={false}
        />

        <TextInput 
          style={styles.input} 
          value={senha} 
          onChangeText={setSenha} 
          secureTextEntry={true} 
          maxLength={8} 
          placeholder='Digite sua Senha'
        />

        <TextInput 
          style={styles.input} 
          value={confSenha} 
          onChangeText={setConfSenha} 
          secureTextEntry={true} 
          maxLength={8} 
          placeholder='Confirme sua Senha'
        />

        <View style={styles.pickerContainer}>
          {Platform.OS === 'web' ? (
            /* Tag HTML nativa para rodar na Web sem quebrar */
            <select 
              value={cargo} 
              onChange={(e) => setCargo(e.target.value)}
              style={styles.webSelect}
            >
              <option value="" disabled hidden>Selecione um cargo</option>
              <option value="manager">Gestor</option>
              <option value="admin">Administrador</option>
              <option value="user">Usuário</option>
            </select>
          ) : (
            /* Componente oficial que rodará perfeitamente no celular */
            <Picker 
              selectedValue={cargo} 
              onValueChange={(itemValue) => setCargo(itemValue)}
              style={{ width: '100%', height: 44 }}
            >
              <Picker.Item label='Gestor' value='manager' />
              <Picker.Item label='Administrador' value='admin' />
              <Picker.Item label='Usuário' value='user' />
            </Picker>
          )}
        </View>

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Manter conectado?</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor='#f4f3f4'  
            onValueChange={(value) => setManterConect(value)} 
            value={manterConect}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Logar" onPress={() => setResultado(`Email: ${email}, Senha: ${senha}`)} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={() => setResultado(`Email: ${email}, Senha: ${senha}, Cargo: ${cargo}, Manter Conectado: ${manterConect ? 'Sim' : 'Não'}`)} />
        </View>

        {resultado ? (
          <View style={styles.resultadoContainer}>
            <Text style={styles.resultado}>
              {resultado}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  subContainer: {
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    width: '90%',
    maxWidth: 720,
    padding: 20,
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
  buttonContainer: {
    marginBottom: 15,
  },
  resultadoContainer: {
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    justifyContent: 'center',
  },
  webSelect: {
    width: '100%',
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    border: 'none',
    outline: 'none',
    fontFamily: 'sans-serif',
  },
  switchContainer: {
    flexDirection: 'row', 
    alignItems: 'center',     
    justifyContent: 'space-between', 
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  resultado: {
    fontSize: 18,
    textAlign: 'center',
  },
});