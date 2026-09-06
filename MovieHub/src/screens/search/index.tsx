import React, { useState, useCallback } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  Image 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "./styles";

export default function Search({ navigation }) {
  const [busca, setBusca] = useState("");
  const [todosFilmes, setTodosFilmes] = useState([]);
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);


  useFocusEffect(
    useCallback(() => {
      carregarFilmes();
    }, [])
  );

  async function carregarFilmes() {
    try {
      const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
      if (filmesSalvos) {
        const parsed = JSON.parse(filmesSalvos);
        setTodosFilmes(parsed);

        filtrarLista(busca, parsed);
      } else {
        setTodosFilmes([]);
        setFilmesFiltrados([]);
      }
    } catch (error) {
      console.log("Erro ao carregar filmes:", error);
    }
  }

  function filtrarLista(texto, lista) {
    if (!texto || texto.trim() === "") {
      setFilmesFiltrados(lista);
    } 
    
    else {

      const termoBusca = texto.toLowerCase();
      const resultado = lista.filter((filme) => {
        const titulo = (filme.titulo || "").toLowerCase();
        const genero = (filme.genero || "").toLowerCase();
        return titulo.includes(termoBusca) || genero.includes(termoBusca);

      });
      setFilmesFiltrados(resultado);
    }
  }

  function handleSearch(texto) {

    setBusca(texto);
    filtrarLista(texto, todosFilmes);
  }

  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.searchInput}
          placeholder="Digite o nome ou gênero do filme..."
          placeholderTextColor="#888"
          value={busca}
          onChangeText={handleSearch}
          autoFocus={true}
        />
      </View>

      <FlatList
        data={filmesFiltrados}
        keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.capa ? (
              <Image source={{ uri: item.capa }} style={styles.capa} />
            ) : null}
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.subtitulo}>{item.genero} • {item.ano}</Text>
              <Text style={styles.nota}>★ {item.nota} / 5</Text>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            {busca ? `Nenhum filme encontrado para "${busca}".` : "Nenhum filme cadastrado."}
          </Text>
        )}
      />
    </View>
  );
}