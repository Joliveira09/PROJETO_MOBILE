import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Movie } from "../movies/index";
import { styles } from "./styles";

export type RootStackParamList = {
    Login: undefined;
    Cadastro: undefined;
    Home: undefined;
    addMovies: undefined;
    Search: undefined;
    infoMovies: { movie: Movie };
};

type Props = NativeStackScreenProps<RootStackParamList, "infoMovies">;

export default function InfoMovies({ navigation, route }: Props) {
    const { movie } = route.params;

    const [nota, setNota] = useState<number>(Number(movie?.nota) || 0);

    const formatarDataLancamento = (data?: string) => {
        if (!data) return "Data não informada";

        const dataObj = new Date(data);
        if (isNaN(dataObj.getTime())) {
            return data;
        }

        const dia = String(dataObj.getDate()).padStart(2, "0");
        const mes = String(dataObj.getMonth() + 1).padStart(2, "0");
        const ano = dataObj.getFullYear();

        return `${dia}/${mes}/${ano}`;
    };


    const subtitulo = [
        movie?.ano || null,
        movie?.duracao ? `${movie.duracao} min` : null
    ]
        .filter(Boolean)
        .join(" • ");

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

                    <View style={styles.headerSpacer} />
                </View>

                <View style={styles.article}>
                    <View style={styles.infoImg}>
                        <View>
                            {movie?.capa ? (
                                <Image
                                    source={{ uri: movie.capa }}
                                    resizeMode="cover"
                                    style={styles.capa}
                                />
                            ) : (
                                <View
                                    style={[
                                        styles.capa,
                                        { justifyContent: "center", alignItems: "center" }
                                    ]}
                                >
                                    <Text style={{ color: "#777" }}>Sem Capa</Text>
                                </View>
                            )}
                        </View>

                        <View style={styles.info}>
                            <View style={styles.rowInfo}>
                                <Text style={styles.textTitulo}>
                                    {movie?.titulo || "Sem título"}
                                </Text>

                                {subtitulo ? (
                                    <Text style={styles.textSubtitulo}>{subtitulo}</Text>
                                ) : null}

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

                                <View style={styles.containerGenero}>
                                    <Text style={styles.tituloGenero}>Data de Lançamento</Text>
                                    <Text style={styles.genero}>
                                        {formatarDataLancamento(movie?.dataLancamento)}
                                    </Text>
                                </View>
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

                        <View style={styles.avaliacao}>
                            <Text style={styles.tituloAvaliacao}>Minha avaliação</Text>

                            <View style={styles.starsContainer}>
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <TouchableOpacity key={star} onPress={() => setNota(star)}>
                                        <Text style={styles.starText}>
                                            {star <= nota ? "★" : "☆"}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View style={styles.trailer}>

                            <Text style={styles.tituloTrailer}>Trailer</Text>
                            <View style={styles.subContainerTrailer}>
                                
                                <Image
                                    source={require("../../../assets/images/Youtube_logo.png")}
                                    style={styles.image}
                                />
                                <Text style = {styles.textTrailer}>Assistir o trailer no Youtube</Text>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}