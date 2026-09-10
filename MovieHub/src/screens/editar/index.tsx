import React, { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    ScrollView, 
    Image, 
    Alert 
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes"; // Ajuste o caminho se necessário
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
    status: string;
    trailerUrl?: string;
    dataLancamento?: string;
};

type Props = NativeStackScreenProps<RootStackParamList, "Editar">;

export default function Editar({ navigation, route }: Props) {
    const movie = route.params?.movie;

    if (!movie) {
        Alert.alert("Erro", "Informações do filme não foram encontradas.");
        navigation.goBack();
        return null;
    }

    const [capa, setCapa] = useState<string | null | undefined>(movie.capa);
    const [titulo, setTitulo] = useState(movie.titulo || "");
    const [genero, setGenero] = useState(movie.genero || "");
    const [ano, setAno] = useState(movie.ano || "");
    const [duracao, setDuracao] = useState(movie.duracao || "");
    const [diretor, setDiretor] = useState(movie.diretor || "");
    const [descricao, setDescricao] = useState(movie.descricao || "");
    const [nota, setNota] = useState<number>(movie.nota || 0);
    const [status, setStatus] = useState<string>(movie.status || "Assistido");
    const [trailerUrl, setTrailerUrl] = useState(movie.trailerUrl || "");

    async function escolherDaGaleria() {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Permissão necessária", "Precisamos de permissão para acessar suas fotos.");
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [2, 3],
            quality: 0.8,
        });

        if (!result.canceled) {
            setCapa(result.assets[0].uri);
        }
    }

    async function tirarFoto() {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
            Alert.alert("Permissão necessária", "Precisamos de permissão para acessar a câmera.");
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [2, 3],
            quality: 0.8,
        });

        if (!result.canceled) {
            setCapa(result.assets[0].uri);
        }
    }

    async function salvarAlteracoes() {
        if (!titulo || !genero || !ano) {
            Alert.alert("Atenção", "Preencha ao menos o Título, Gênero e Ano.");
            return;
        }

        const filmeAtualizado: Movie = {
            ...movie,
            capa,
            titulo,
            genero,
            ano,
            duracao,
            diretor,
            descricao,
            nota,
            status,
            trailerUrl,
        };

        try {
            const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
            const listaFilmes: Movie[] = filmesSalvos ? JSON.parse(filmesSalvos) : [];

            const listaAtualizada = listaFilmes.map((item) =>
                item.id === movie.id ? filmeAtualizado : item
            );

            await AsyncStorage.setItem("@filmes_data", JSON.stringify(listaAtualizada));

            Alert.alert("Sucesso", "Informações atualizadas com sucesso!");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar as alterações.");
        }
    }

    async function excluirFilme() {
        Alert.alert(
            "Excluir Filme",
            `Tem certeza que deseja remover "${movie.titulo}" da sua lista?`,
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Excluir",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
                            const listaFilmes: Movie[] = filmesSalvos ? JSON.parse(filmesSalvos) : [];

                            const listaAtualizada = listaFilmes.filter((item) => item.id !== movie.id);

                            await AsyncStorage.setItem("@filmes_data", JSON.stringify(listaAtualizada));

                            Alert.alert("Sucesso", "Filme excluído com sucesso!");
                            navigation.goBack();
                        } catch (error) {
                            Alert.alert("Erro", "Não foi possível excluir o filme.");
                        }
                    },
                },
            ]
        );
    }

    return (
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>Editar Filme</Text>

                    <TouchableOpacity style={styles.deleteButton} onPress={excluirFilme}>
                        <Text style={styles.deleteButtonText}>🗑️</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.article}>
                    <View style={styles.capaText}>
                        <Text style={styles.textCapa}>Imagem do filme</Text>

                        <View style={styles.containerImg}>
                            {capa ? (
                                <Image
                                    style={styles.capa}
                                    source={{ uri: capa }}
                                    resizeMode="cover"
                                />
                            ) : (
                                <View style={[styles.capa, { justifyContent: "center", alignItems: "center" }]}>
                                    <Text style={{ color: "#777" }}>Sem Capa</Text>
                                </View>
                            )}

                            <View style={styles.imageButtonsContainer}>
                                <TouchableOpacity style={styles.imageButton} onPress={escolherDaGaleria}>
                                    <Text style={styles.imageButtonText}>Galeria</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.imageButton} onPress={tirarFoto}>
                                    <Text style={styles.imageButtonText}>Câmera</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.form}>
                        <Text style={styles.label}>Título *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: Inception"
                            placeholderTextColor="#777"
                            value={titulo}
                            onChangeText={setTitulo}
                        />

                        <Text style={styles.label}>Gênero *</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: Ação, Ficção"
                            placeholderTextColor="#777"
                            value={genero}
                            onChangeText={setGenero}
                        />

                        <View style={styles.row}>
                            <View style={styles.flex1}>
                                <Text style={styles.label}>Ano *</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="2010"
                                    placeholderTextColor="#777"
                                    keyboardType="numeric"
                                    value={ano}
                                    onChangeText={setAno}
                                />
                            </View>
                            <View style={styles.flex1}>
                                <Text style={styles.label}>Duração (min)</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="148"
                                    placeholderTextColor="#777"
                                    keyboardType="numeric"
                                    value={duracao}
                                    onChangeText={setDuracao}
                                />
                            </View>
                        </View>

                        <Text style={styles.label}>Diretor</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Ex: Christopher Nolan"
                            placeholderTextColor="#777"
                            value={diretor}
                            onChangeText={setDiretor}
                        />

                        <Text style={styles.label}>Descrição</Text>
                        <TextInput
                            style={[styles.input, styles.textArea]}
                            placeholder="Escreva a sinopse..."
                            placeholderTextColor="#777"
                            multiline
                            numberOfLines={4}
                            value={descricao}
                            onChangeText={setDescricao}
                        />

                        <Text style={styles.label}>Nota: {nota} / 5</Text>
                        <View style={styles.starsContainer}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <TouchableOpacity key={star} onPress={() => setNota(star)}>
                                    <Text style={styles.starText}>
                                        {star <= nota ? "★" : "☆"}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <Text style={styles.label}>Status</Text>
                        <View style={styles.statusContainer}>
                            {["Assistido", "Assistindo", "Quero Assistir"].map((op) => (
                                <TouchableOpacity
                                    key={op}
                                    style={[
                                        styles.statusButton,
                                        status === op && styles.statusButtonSelected,
                                    ]}
                                    onPress={() => setStatus(op)}
                                >
                                    <Text style={status === op ? styles.statusTextSelected : styles.statusText}>
                                        {op}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <Text style={styles.label}>Link do Trailer (YouTube)</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="https://www.youtube.com/..."
                            placeholderTextColor="#777"
                            autoCapitalize="none"
                            keyboardType="url"
                            value={trailerUrl}
                            onChangeText={setTrailerUrl}
                        />

                        <View style={styles.actionButtonsContainer}>
                            <TouchableOpacity style={styles.saveButton} onPress={salvarAlteracoes}>
                                <Text style={styles.saveButtonText}>Salvar Alterações</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                                <Text style={styles.cancelButtonText}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}