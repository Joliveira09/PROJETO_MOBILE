import React, { useState, useCallback } from "react";
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableOpacity
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { supabase } from "../../services/supabase";
import { Movie } from "../movies/index";
import { styles } from "./styles";

interface FavoritesProps {
    navigation: any;
}

export default function Favorites({ navigation }: FavoritesProps) {
    const [favoritos, setFavoritos] = useState<Movie[]>([]);

    useFocusEffect(
        useCallback(() => {
            carregarFavoritosDoSupabase();
        }, [])
    );

    async function carregarFavoritosDoSupabase() {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const { data, error } = await supabase
                .from("filmes_usuarios")
                .select(`
                    favorito,
                    status,
                    filmes (
                        id_filme,
                        titulo,
                        genero,
                        ano,
                        duracao,
                        descrcao,
                        nota,
                        trailer
                    )
                `)
                .eq("id_usuario", user.id)
                .eq("favorito", true);

            if (error) {
                console.log("Erro ao carregar favoritos:", error.message);
                return;
            }

            if (data) {
                const listaFavs: Movie[] = data.map((item: any) => ({
                    id: String(item.filmes.id_filme),
                    id_filme: item.filmes.id_filme,
                    titulo: item.filmes.titulo,
                    genero: item.filmes.genero,
                    ano: String(item.filmes.ano),
                    nota: Number(item.filmes.nota) || 0,
                    favorito: true,
                    status: item.status
                }));
                setFavoritos(listaFavs);
            }
        } catch (error) {
            console.log("Erro ao carregar favoritos:", error);
        }
    }

    async function descurtirFilme(idFlime: number) {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            await supabase
                .from("filmes_usuarios")
                .upsert({
                    id_usuario: user.id,
                    id_filme: idFlime,
                    favorito: false
                }, { onConflict: 'id_usuario,id_filme' });

            setFavoritos(favoritos.filter((filme) => filme.id_filme !== idFlime));
        } catch (error) {
            console.log("Erro ao descurtir filme:", error);
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.tituloHeader}>Favoritos</Text>
                </View>

                <FlatList<Movie>
                    data={favoritos}
                    keyExtractor={(item) => String(item.id_filme)}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 30 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={styles.card}
                            onPress={() => navigation.navigate("infoMovies", { movie: item })}
                        >
                            <View style={styles.info}>
                                <Text style={styles.cardTitulo} numberOfLines={1}>
                                    {item.titulo}
                                </Text>
                                <Text style={styles.cardSubtitulo} numberOfLines={1}>
                                    - {item.ano} {item.genero}
                                </Text>
                                <Text style={styles.cardNota}>★ {item.nota}</Text>
                            </View>

                            <TouchableOpacity
                                style={styles.heartButton}
                                onPress={() => descurtirFilme(item.id_filme)}
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