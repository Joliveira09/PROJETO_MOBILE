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

export default function Search({ navigation, route }: any) {
  const [busca, setBusca] = useState("");
  const [todosFilmes, setTodosFilmes] = useState([]);
  const [filmesFiltrados, setFilmesFiltrados] = useState([]);

  useFocusEffect(
    useCallback(() => {
      carregarFilmes();
    }, [route.params?.filtros])
  );

  async function carregarFilmes() {
    try {
      const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
      let lista: any[] = [];
      
      if (filmesSalvos) {
        lista = JSON.parse(filmesSalvos);
        setTodosFilmes(lista);
      } else {
        setTodosFilmes([]);
      }

      aplicarFiltrosEBusca(busca, lista, route.params?.filtros);
    } catch (error) {
      console.log("Erro ao carregar filmes:", error);
    }
  }

  function aplicarFiltrosEBusca(texto: string, lista: any[], filtros: any) {
    let resultado = [...lista];

    if (filtros) {
      if (filtros.genero) {
        resultado = resultado.filter((filme) =>
          (filme.genero || "").toLowerCase().includes(filtros.genero.toLowerCase())
        );
      }

      if (filtros.status && filtros.status !== "Todos") {
        resultado = resultado.filter((filme) => filme.status === filtros.status);
      }

      if (filtros.anoDe) {
        resultado = resultado.filter((filme) => Number(filme.ano) >= Number(filtros.anoDe));
      }

      if (filtros.anoAte) {
        resultado = resultado.filter((filme) => Number(filme.ano) <= Number(filtros.anoAte));
      }

      if (filtros.notaMinima > 0) {
        resultado = resultado.filter((filme) => Number(filme.nota) >= filtros.notaMinima);
      }

      if (filtros.apenasFavoritos) {
        resultado = resultado.filter((filme) => filme.favorito === true);
      }
    }

    if (texto && texto.trim() !== "") {
      const termo = texto.toLowerCase();
      resultado = resultado.filter((filme) => {
        const titulo = (filme.titulo || "").toLowerCase();
        const genero = (filme.genero || "").toLowerCase();
        return titulo.includes(termo) || genero.includes(termo);
      });
    }

    setFilmesFiltrados(resultado);
  }

  function handleSearch(texto: string) {
    setBusca(texto);
    aplicarFiltrosEBusca(texto, todosFilmes, route.params?.filtros);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <View style={styles.searchFilter}>
          <TextInput
            style={styles.searchInput}
            placeholder="Digite o nome ou gênero do filme..."
            placeholderTextColor="#888"
            value={busca}
            onChangeText={handleSearch}
            autoFocus={true}
          />

          <TouchableOpacity 
            style={styles.filter} 
            onPress={() => navigation.navigate("Filter", { filtros: route.params?.filtros })}
          >
            <Text style={styles.textFilter}>Y Filtros</Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={filmesFiltrados}
        keyExtractor={(item, index) => (item && item.id ? item.id.toString() : index.toString())}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigation.navigate("infoMovies", { movie: item })}
          >
            {item.capa ? (
              <Image source={{ uri: item.capa }} style={styles.capa} />
            ) : null}
            <View style={styles.info}>
              <Text style={styles.titulo}>{item.titulo}</Text>
              <Text style={styles.subtitulo}>{item.genero} • {item.ano}</Text>
              <Text style={styles.nota}>★ {item.nota} / 5</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            {busca || route.params?.filtros
              ? "Nenhum filme encontrado com os critérios selecionados."
              : "Nenhum filme cadastrado."}
          </Text>
        )}
      />
    </View>
  );
}