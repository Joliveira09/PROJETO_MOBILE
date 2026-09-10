import React, { useState, useCallback } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    ScrollView, 
    FlatList, 
    Image 
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export type Movie = {
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
    isFavorito?: boolean;
    favorito?: boolean;
    trailerUrl?: string;
    dataLancamento?: string;
};

export default function Home({ navigation }: any) {
    const [nomeUsuario, setNomeUsuario] = useState("");
    const [filmes, setFilmes] = useState<Movie[]>([]);

    const carregarDados = useCallback(async () => {
        try {
            // Carregar dados do usuário
            const userData = await AsyncStorage.getItem("@user_data");
            if (userData) {
                const user = JSON.parse(userData);
                setNomeUsuario(user.nome || "Lucas");
            } else {
                setNomeUsuario("Lucas");
            }

            // Carregar filmes cadastrados
            const filmesData = await AsyncStorage.getItem("@filmes_data");
            if (filmesData) {
                const lista: Movie[] = JSON.parse(filmesData);
                setFilmes(lista);
            } else {
                setFilmes([]);
            }
        } catch (error) {
            console.log("Erro ao carregar dados na Home:", error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            carregarDados();
        }, [carregarDados])
    );

    // Função para alternar o status de favorito na Home e salvar no AsyncStorage
    async function toggleFavorito(id: string) {
        const atualizados = filmes.map((filme) => {
            if (filme.id === id) {
                const novoFavorito = !(filme.favorito || filme.isFavorito);
                return { 
                    ...filme, 
                    favorito: novoFavorito,
                    isFavorito: novoFavorito 
                };
            }
            return filme;
        });

        setFilmes(atualizados);

        try {
            await AsyncStorage.setItem("@filmes_data", JSON.stringify(atualizados));
        } catch (error) {
            console.log("Erro ao salvar favorito:", error);
        }
    }

    // Filtra considerando tanto 'favorito' quanto 'isFavorito'
    const filmesFavoritos = filmes.filter((f) => Boolean(f.favorito || f.isFavorito));

    // Métricas de resumo baseadas no status
    const totalFilmes = filmes.length;
    const assistidos = filmes.filter((f) => {
        const status = (f.status || "").trim().toLowerCase();
        return status === "assistido" || status === "assistidos";
    }).length;
    
    const queroAssistir = filmes.filter((f) => {
        const status = (f.status || "").trim().toLowerCase();
        return status === "quero assistir";
    }).length;
    
    const favoritosCount = filmesFavoritos.length;

    const renderMovieCard = ({ item }: { item: Movie }) => {
        const isFav = Boolean(item.favorito || item.isFavorito);

        return (
            <TouchableOpacity 
                style={styles.movieCard}
                onPress={() => navigation.navigate("infoMovies", { movie: item })}
            >
                <View style={{ position: "relative" }}>
                    {item.capa ? (
                        <Image source={{ uri: item.capa }} style={styles.movieCover} resizeMode="cover" />
                    ) : (
                        <View style={[styles.movieCover, styles.noCover]}>
                            <Text style={{ color: "#777", fontSize: 10 }}>Sem Capa</Text>
                        </View>
                    )}

                    {/* Botão para favoritar direto no Card da Home */}
                    <TouchableOpacity 
                        style={{ position: "absolute", top: 6, right: 6, backgroundColor: "rgba(0,0,0,0.6)", borderRadius: 12, padding: 4 }}
                        onPress={() => toggleFavorito(item.id)}
                    >
                        <Text style={{ fontSize: 12 }}>{isFav ? "❤️" : "🤍"}</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.movieTitle} numberOfLines={1}>{item.titulo}</Text>
                <Text style={styles.movieYear}>{item.ano}</Text>
                <View style={styles.ratingContainer}>
                    <Text style={styles.starIcon}>★</Text>
                    <Text style={styles.ratingText}>{Number(item.nota || 0).toFixed(1)}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

                {/* Top Header */}
                <View style={styles.topHeader}>
                    <TouchableOpacity style={styles.iconButton}>
                        <Text style={styles.topIconText}>≡</Text>
                    </TouchableOpacity>

                    <View style={styles.titulo}>
                        <Text style={styles.text}>Movie</Text>
                        <Text style={styles.textHub}>Hub</Text>
                    </View>

                    <TouchableOpacity style={styles.iconButton}>
                        <Text style={styles.topIconText}>🔔</Text>
                    </TouchableOpacity>
                </View>

                {/* Saudação */}
                <View style={styles.greetingContainer}>
                    <Text style={styles.greetingText}>Olá, {nomeUsuario}! 👋</Text>
                    <Text style={styles.subGreetingText}>Desfrute dos seus filmes favoritos.</Text>
                </View>


                <View style={styles.addMovieSearch}>
                    <TouchableOpacity 
                        style={styles.search} 
                        onPress={() => navigation.navigate("Search")}
                    >
                        <Text style={styles.searchIcon}>🔍</Text>
                        <Text style={styles.textSearch}>Pesquisar filmes...</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.buttonAddMovies} 
                        onPress={() => navigation.navigate("addMovies")}
                    >
                        <Text style={styles.buttonAddText}>+</Text>
                    </TouchableOpacity>
                </View>


                <Text style={styles.sectionTitle}>Resumo</Text>
                <View style={styles.statsContainer}>
                    <View style={styles.statCard}>
                        <Text style={styles.statIcon}>🎬</Text>
                        <Text style={styles.statLabel}>Total de filmes</Text>
                        <Text style={styles.statValue}>{totalFilmes}</Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={[styles.statIcon, { color: "#4CAF50" }]}>✓</Text>
                        <Text style={styles.statLabel}>Assistidos</Text>
                        <Text style={styles.statValue}>{assistidos}</Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={[styles.statIcon, { color: "#2196F3" }]}>🕒</Text>
                        <Text style={styles.statLabel}>Quero assistir</Text>
                        <Text style={styles.statValue}>{queroAssistir}</Text>
                    </View>

                    <View style={styles.statCard}>
                        <Text style={[styles.statIcon, { color: "#E91E63" }]}>❤️</Text>
                        <Text style={styles.statLabel}>Favoritos</Text>
                        <Text style={styles.statValue}>{favoritosCount}</Text>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Filmes Recentes</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Movies")}>
                        <Text style={styles.seeAllText}>Ver todos</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={filmes}
                    keyExtractor={(item, index) => (item?.id ? item.id : index.toString())}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderMovieCard}
                    contentContainerStyle={styles.horizontalList}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Nenhum filme cadastrado.</Text>
                    }
                />

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Favoritos</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Favoritos")}>
                        <Text style={styles.seeAllText}>Ver todos</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={filmesFavoritos}
                    keyExtractor={(item, index) => (item?.id ? item.id : index.toString())}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderMovieCard}
                    contentContainerStyle={styles.horizontalList}
                    ListEmptyComponent={
                        <Text style={styles.emptyText}>Nenhum favorito adicionado.</Text>
                    }
                />
            </ScrollView>
        </View>
    );
}