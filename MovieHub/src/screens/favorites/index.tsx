import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity
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
  nota: number;
  favorito?: boolean;
}

interface FavoritesProps {
  navigation: any;
}

export default function Favorites({ navigation }: FavoritesProps) {
  const [favoritos, setFavoritos] = useState<Movie[]>([]);

  useFocusEffect(
    useCallback(() => {
      carregarFavoritos();
    }, [])
  );

  async function carregarFavoritos() {
    try {
      const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
      if (filmesSalvos) {
        const parsed: Movie[] = JSON.parse(filmesSalvos);
        
        const apenasFavoritos = parsed.filter((filme) => filme.favorito === true);
        setFavoritos(apenasFavoritos);
      } else {
        setFavoritos([]);
      }
    } catch (error) {
      console.log("Erro ao carregar favoritos:", error);
    }
  }

  async function descurtirFilme(id: string) {
    try {
      const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
      if (filmesSalvos) {
        const parsed: Movie[] = JSON.parse(filmesSalvos);
        
        // Atualiza a propriedade 'favorito' no storage geral
        const atualizados = parsed.map((filme) => {
          if (filme.id === id) {
            return { ...filme, favorito: false };
          }
          return filme;
        });

        await AsyncStorage.setItem("@filmes_data", JSON.stringify(atualizados));
        
        // Remove da tela local de favoritos
        setFavoritos(atualizados.filter((filme) => filme.favorito === true));
      }
    } catch (error) {
      console.log("Erro ao descurtir filme:", error);
    }
  }

  return (
    <View style={styles.body}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.tituloHeader}>Favoritos</Text>
        </View>

       
        <FlatList<Movie>
          data={favoritos}
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
                <Text style={styles.cardNota}>★ {item.nota}</Text>
              </View>

              <TouchableOpacity
                style={styles.heartButton}
                onPress={() => descurtirFilme(item.id)}
              >
                <Text style={styles.heartActive}>♥</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>
              Você ainda não favoritou nenhum filme.
            </Text>
          )}
        />
      </View>
    </View>
  );
}