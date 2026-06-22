import React from 'react';
import { StyleSheet, View, Text, Pressable, SafeAreaView } from 'react-native';

export default function Ex_02_part2Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.cardContainer}>
          
          <Text style={styles.titulo}>EXERCÍCIO 2</Text>
          <Text style={styles.subtitulo}>
            Você entrou na navegação por Menu Lateral (Drawer)! 
          </Text>

          <Text style={styles.instrucao}>
             Deslize o dedo do canto esquerdo da tela para o centro ou use o botão abaixo para abrir as opções.
          </Text>

          <View style={styles.gridBotoes}>
          
            <Pressable style={styles.boton} onPress={() => navigation.openDrawer()}>
              <Text style={styles.textoBoton}>Abrir Menu Lateral ☰</Text>
            </Pressable>

            
            <Pressable style={[styles.boton, styles.botonVoltar]} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.textoBotonVoltar}>Voltar para o Início (Stack)</Text>
            </Pressable>

          </View>

        </View> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 25,
    width: '100%',
    maxWidth: 360, 
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 16,
    color: '#f5b016',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 15,
  },
  instrucao: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
    lineHeight: 20,
  },
  gridBotoes: {
    width: '100%',
    gap: 12,
  },
  boton: {
    backgroundColor: '#f5b016', 
    paddingVertical: 14,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botonVoltar: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#999',
  },
  textoBoton: {
    color: '#000', 
    fontWeight: '600',
    fontSize: 15,
  },
  textoBotonVoltar: {
    color: '#555', 
    fontWeight: '600',
    fontSize: 14,
  },
});