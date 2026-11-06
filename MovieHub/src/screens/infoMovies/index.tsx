import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Alert, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../../services/supabase";
import { Movie } from "../movies/index";
import { styles } from "./styles";

type Props = NativeStackScreenProps<any, "infoMovies">;

export default function InfoMovies({ navigation, route }: Props) {
    const { movie } = route.params;

    const [nota, setNota] = useState<number>(Number(movie?.nota) || 0);
    const [favorito, setFavorito] = useState<boolean>(Boolean(movie?.favorito));

    const handleToggleFavorito = async () => {
        try {
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) return;

            const novoFavorito = !favorito;
            setFavorito(novoFavorito);

            const statusFormatado = movie.status === 'Assistindo' ? 'assistindo' : 
                                    movie.status === 'Assistido' ? 'assistido' : 'deseja_assistir';

            await supabase
                .from("filmes_usuarios")
                .upsert({
                    id_usuario: user.id,
                    id_filme: movie.id_filme,
                    favorito: novoFavorito,
                    status: statusFormatado
                }, { onConflict: 'id_usuario,id_filme' });

        } catch (error) {
            console.log("Erro ao alternar favorito:", error);
        }
    };

    const handleOpenTrailer = () => {
        if (movie?.trailerUrl) {
            Linking.openURL(movie.trailerUrl).catch(() => {
                Alert.alert("Erro", "Não foi possível abrir o link do trailer.");
            });
        }
    };

    return (
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Detalhes do Filme</Text>
                </View>

                <View style={styles.article}>
                    <View style={styles.infoImg}>
                        {movie?.capa ? (
                            <Image source={{ uri: movie.capa }} resizeMode="cover" style={styles.capa} />
                        ) : (
                            <View style={[styles.capa, { justifyContent: "center", alignItems: "center" }]}>
                                <Text style={{ color: "#777" }}>Sem Capa</Text>
                            </View>
                        )}

                        <View style={styles.info}>
                            <Text style={styles.textTitulo}>{movie?.titulo || "Sem título"}</Text>
                            <Text style={styles.textSubtitulo}>{movie?.ano} • {movie?.duracao ? `${movie.duracao} min` : ""}</Text>
                            
                            <View style={styles.cardNota}>
                                <Text style={styles.estrelaNota}>★</Text>
                                <Text style={styles.textNota}>{nota > 0 ? nota : "N/A"}</Text>
                                <Text style={styles.textStatus}>{movie?.status || "Pendente"}</Text>
                            </View>

                            <View style={styles.containerGenero}>
                                <Text style={styles.tituloGenero}>Gênero</Text>
                                <Text style={styles.genero}>{movie?.genero || "Não informado"}</Text>
                            </View>

                            <View style={styles.containerDiretor}>
                                <Text style={styles.tituloDiretor}>Diretor</Text>
                                <Text style={styles.diretor}>{movie?.diretor || "Não informado"}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.section}>
                        <View style={styles.descricao}>
                            <Text style={styles.tituloDescricao}>Descrição</Text>
                            <Text style={styles.textDescricao}>
                                {movie?.descricao || "Sem descrição disponível."}
                            </Text>
                        </View>

                        <View style={styles.trailer}>
                            <Text style={styles.tituloTrailer}>Trailer</Text>
                            <TouchableOpacity style={styles.subContainerTrailer} onPress={handleOpenTrailer}>
                                <Text style={styles.textTrailer}>Assistir o trailer no Youtube</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.atividades}>
                            <TouchableOpacity style={styles.curtir} onPress={handleToggleFavorito}>
                                <Ionicons
                                    name={favorito ? "heart" : "heart-outline"}
                                    size={24}
                                    color={favorito ? "#E50914" : "#FFF"}
                                />
                                <Text style={styles.actionText}>Favorito</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}