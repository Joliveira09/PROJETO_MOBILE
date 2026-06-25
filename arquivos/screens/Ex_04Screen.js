import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  const [mode, setMode] = useState("");
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    let subscription;

    const initialize = async () => {
      await readOrientation();

      subscription = ScreenOrientation.addOrientationChangeListener(
        ({ orientationInfo }) => {
          if (
            orientationInfo.orientation ===
              ScreenOrientation.Orientation.PORTRAIT_UP ||
            orientationInfo.orientation ===
              ScreenOrientation.Orientation.PORTRAIT_DOWN
          ) {
            setMode("portrait");
          } else {
            setMode("landscape");
          }
        }
      );
    };

    initialize();

    return () => {
      if (subscription) {
        ScreenOrientation.removeOrientationChangeListener(subscription);
      }
    };
  }, []);

  const readOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();

    if (
      orientation === ScreenOrientation.Orientation.PORTRAIT_UP ||
      orientation === ScreenOrientation.Orientation.PORTRAIT_DOWN
    ) {
      setMode("portrait");
    } else {
      setMode("landscape");
    }
  };

  const adicionarNome = () => {
    if (nome.trim() === "") return;

    setNomes([...nomes, nome]);
    setNome("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Ex_04</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite um nome"
        value={nome}
        onChangeText={setNome}
        returnKeyType="done"
        onSubmitEditing={adicionarNome}
      />

      <View
        style={[
          styles.content,
          mode === "portrait" ? styles.column : styles.row,
        ]}
      >
        <View
          style={[
            styles.block,
            {
              backgroundColor:
                mode === "portrait" ? "#87CEFA" : "#98FB98",
            },
          ]}
        >
          <Text style={styles.text}>Button</Text>
        </View>

        <View
          style={[
            styles.block,
            {
              backgroundColor:
                mode === "portrait" ? "#4682B4" : "#32CD32",
            },
          ]}
        >
          <Text style={styles.text}>Mode: {mode}</Text>
        </View>
      </View>

      <View style={styles.lista}>
        <Text style={styles.subtitulo}>Nomes salvos:</Text>
        {nomes.map((item, index) => (
          <Text key={index} style={styles.item}>
            {item}
          </Text>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topBar: {
    height: 70,
    backgroundColor: "#222",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    margin: 10,
    padding: 10,
    borderRadius: 6,
  },

  content: {
    flex: 1,
  },

  row: {
    flexDirection: "row",
  },

  column: {
    flexDirection: "column",
  },

  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },

  lista: {
    padding: 10,
    backgroundColor: "#eee",
  },

  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },

  item: {
    fontSize: 14,
    paddingVertical: 2,
  },
});