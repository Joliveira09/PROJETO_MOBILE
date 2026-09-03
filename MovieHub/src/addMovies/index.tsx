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
import { styles } from "./styles";

export default function Movies({ navigation }) {

    const [capa, setCapa] = useState(null);
    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [ano, setAno] = useState("");
    const [duracao, setDuracao] = useState("");
    const [diretor, setDiretor] = useState("");
    const [descricao, setDescricao] = useState("");
    const [nota, setNota] = useState(0);
    const [status, setStatus] = useState("Assistido");
    const [trailerUrl, setTrailerUrl] = useState("");


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

    // Tirar foto com a Câmera
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

    // Salvar o Filme no AsyncStorage
    async function salvarFilme() {
        if (!titulo || !genero || !ano) {
            Alert.alert("Atenção", "Preencha ao menos o Título, Gênero e Ano.");
            return;
        }

        const novoFilme = {
            id: String(Date.now()),
            capa,
            titulo,
            genero,
            ano,
            duracao,
            diretor,
            descricao,
            nota,
            status,
            trailerUrl
        };

        try {
            const filmesSalvos = await AsyncStorage.getItem("@filmes_data");
            const listaFilmes = filmesSalvos ? JSON.parse(filmesSalvos) : [];

            listaFilmes.push(novoFilme);

            await AsyncStorage.setItem("@filmes_data", JSON.stringify(listaFilmes));

            Alert.alert("Sucesso", "Filme cadastrado com sucesso!");
            navigation.goBack();
        } catch (error) {
            Alert.alert("Erro", "Não foi possível salvar o filme.");
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity 
                        style={styles.buttonVoltar} 
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.irHome}>←</Text>
                    </TouchableOpacity>

                    <Text style={styles.titulo}>Novo Filme</Text>
                </View>

                <ScrollView showsVerticalScrollIndicator={false}>

                    <Text style={styles.label}>Capa do Filme</Text>
                    {capa && (
                        <Image source={{ uri: capa }} style={styles.previewCapa} />
                    )}
                    <View style={styles.imageButtonsContainer}>
                        <TouchableOpacity style={styles.imageButton} onPress={escolherDaGaleria}>
                            <Text style={styles.imageButtonText}>Galeria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.imageButton} onPress={tirarFoto}>
                            <Text style={styles.imageButtonText}>Câmera</Text>
                        </TouchableOpacity>
                    </View>


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
                        placeholder="Ex: Ação, Ficção Científica"
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
                        placeholder="Escreva a sinopse do filme..."
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
                                    status === op && styles.statusButtonSelected
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
                        placeholder="https://www.youtube.com/watch?v=..."
                        placeholderTextColor="#777"
                        autoCapitalize="none"
                        keyboardType="url"
                        value={trailerUrl}
                        onChangeText={setTrailerUrl}
                    />


                    <View style={styles.actionButtonsContainer}>
                        <TouchableOpacity style={styles.saveButton} onPress={salvarFilme}>
                            <Text style={styles.saveButtonText}>Salvar Filme</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
                            <Text style={styles.cancelButtonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}