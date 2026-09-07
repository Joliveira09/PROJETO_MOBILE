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

export interface Movie {
  id: string;
  capa?: string | null;
  titulo: string;
  genero: string;
  ano: string;
  duracao?: string;
  diretor?: string;
  descricao?: string;
  nota: number;
  status?: string;
  trailerUrl?: string;
  favorito?: boolean;
  dataLancamento: string;
}

interface MoviesProps {
  navigation: any;
}

const CATEGORIAS = ["Todos", "Assistidos", "Quero Assistir", "Assistindo"];

export default function Movies({ navigation }: MoviesProps) {
  const [busca, setBusca] = useState<string>("");
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("Todos");
  const [todosFilmes, setTodosFilmes] = useState<Movie[]>([]);
  const [filmesExibidos, setFilmesExibidos] = useState<Movie[]>([]);

  useFocusEffect(
    useCallback(() => {
      carregarFilmes();
    }, [])
  );

  async function carregarFilmes() {
    try {
      const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
      if (filmesSalvos) {
        const parsed: Movie[] = JSON.parse(filmesSalvos);
        setTodosFilmes(parsed);
        aplicarFiltros(busca, categoriaAtiva, parsed);
      } else {
        setTodosFilmes([]);
        setFilmesExibidos([]);
      }
    } catch (error) {
      console.log("Erro ao carregar filmes:", error);
    }
  }

  function aplicarFiltros(texto: string, categoria: string, lista: Movie[]) {
    let resultado = lista;


    if (categoria !== "Todos") {
      resultado = resultado.filter((f) => {
        if (!f.status) return false;
        
        const statusFilme = f.status.trim().toLowerCase();
        const statusCategoria = categoria.trim().toLowerCase();

        if (statusCategoria === "assistidos") {
          return statusFilme === "assistido" || statusFilme === "assistidos";
        }

        return statusFilme === statusCategoria;
      });
    }


    if (texto.trim() !== "") {
      const termo = texto.toLowerCase();
      resultado = resultado.filter(
        (f) =>
          (f.titulo || "").toLowerCase().includes(termo) ||
          (f.genero || "").toLowerCase().includes(termo)
      );
    }

    setFilmesExibidos(resultado);
  }

  function handleSearch(texto: string) {
    setBusca(texto);
    aplicarFiltros(texto, categoriaAtiva, todosFilmes);
  }

  function handleSelectCategoria(cat: string) {
    setCategoriaAtiva(cat);
    aplicarFiltros(busca, cat, todosFilmes);
  }

  async function toggleFavorito(id: string) {
    const atualizados = todosFilmes.map((filme) => {
      if (filme.id === id) {
        return { ...filme, favorito: !filme.favorito };
      }
      return filme;
    });

    setTodosFilmes(atualizados);
    aplicarFiltros(busca, categoriaAtiva, atualizados);

    try {
      await AsyncStorage.setItem("@filmes_data", JSON.stringify(atualizados));
    } catch (error) {
      console.log("Erro ao salvar favorito:", error);
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.tituloHeader}>Filmes</Text>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={styles.funnelIcon}>Y</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.searchRow}>
          <View style={styles.searchContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar filmes..."
              placeholderTextColor="#777"
              value={busca}
              onChangeText={handleSearch}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterIcon}>⚙️</Text>
          </TouchableOpacity>
        </View>


        <View style={styles.tabsContainer}>
          {CATEGORIAS.map((cat) => {
            const isActive = categoriaAtiva === cat;
            return (
              <TouchableOpacity
                key={cat}
                onPress={() => handleSelectCategoria(cat)}
                style={[styles.tabButton, isActive && styles.tabButtonActive]}
              >
                <Text style={[styles.tabText, isActive && styles.tabTextActive]}>
                  {cat}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>


        <FlatList<Movie>
          data={filmesExibidos}
          keyExtractor={(item, index) => (item?.id ? item.id : index.toString())}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          renderItem={({ item }) => (


            <TouchableOpacity 
              style={styles.card}
              onPress={() => navigation.navigate("infoMovies", { movie: item })}
            >
              {item.capa ? (
                <Image source={{ uri: item.capa }} style={styles.capa} />
              ) : (
                <View style={[styles.capa, styles.capaPlaceholder]}>
                  <Text style={{ color: "#777", fontSize: 10 }}>Sem Capa</Text>
                </View>
              )}

              <View style={styles.info}>
                <Text style={styles.cardTitulo} numberOfLines={1}>
                  {item.titulo}
                </Text>
                <Text style={styles.cardSubtitulo} numberOfLines={1}>
                  {item.ano} • {item.genero}
                </Text>
                
                <View style={styles.rowInfo}>
                  <Text style={styles.cardNota}>★ {item.nota}</Text>
                  {item.status ? (
                    <View style={styles.statusBadge}>
                      <Text style={styles.statusBadgeText}>{item.status}</Text>
                    </View>
                  ) : null}
                </View>
              </View>

              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => toggleFavorito(item.id)}
              >
                <Text style={item.favorito ? styles.heartActive : styles.heartInactive}>
                  {item.favorito ? "♥" : "♡"}
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              {busca || categoriaAtiva !== "Todos"
                ? "Nenhum filme encontrado para este filtro."
                : "Nenhum filme cadastrado."}
            </Text>
          )}
        />
      </View>
    </View>
  );
}