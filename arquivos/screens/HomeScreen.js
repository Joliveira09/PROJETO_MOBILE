import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, SafeAreaView } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>

          <Image
            source={require('../assets/etec.jpg')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.titulo}>HOME</Text>

          <View style={styles.gridBotoes}>

            <View style={styles.filaGrid}>
              <Pressable style={styles.boton} onPress={() => navigation.navigate('Details')}>
                <Text style={styles.textoBoton}>Ir para Detalhes</Text>
              </Pressable>

              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex01')}>
                <Text style={styles.textoBoton}>Ir para Ex01</Text>
              </Pressable>
            </View>

            <View style={styles.filaGrid}>
              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_01_part2')}>
                <Text style={styles.textoBoton}>Ir para Ex_01_part2</Text>
              </Pressable>

              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_02_part2')}>
                <Text style={styles.textoBoton}>Ir para Ex_02_part2</Text>
              </Pressable>

            </View>

            <View style={styles.filaGrid}>

              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_03')}>
                <Text style={styles.textoBoton}>Ir para Ex_03</Text>
              </Pressable>

              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_03_part2')}>
                <Text style={styles.textoBoton}>Ir para Ex_03_part2</Text>
              </Pressable>

            </View>

            <View style={styles.filaGrid}>

              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_03_part3')}>
                <Text style={styles.textoBoton}>Ir para Ex_03_part3</Text>
              </Pressable>

              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_03_part4')}>
                <Text style={styles.textoBoton}>Ir para Ex_03_part4</Text>
              </Pressable>

            </View>

            <View style={styles.filaGrid}>


              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_03_part6')}>
                <Text style={styles.textoBoton}>Ir para Ex_03_part6</Text>
              </Pressable>



              <Pressable style={styles.boton} onPress={() => navigation.navigate('Ex_04')}>
                <Text style={styles.textoBoton}>Ir para Ex_04</Text>
              </Pressable>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardContainer: {
    backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 20,
    width: '100%',
    maxWidth: 360,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 100,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  gridBotoes: {
    width: '100%',
    gap: 12,
  },
  filaGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 12,
  },
  boton: {
    flex: 1,
    backgroundColor: '#f5b016',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  botonVazio: {
    flex: 1,
  },
  textoBoton: {
    color: '#000',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
});