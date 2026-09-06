import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Home({ navigation }) {
    const [nomeUsuario, setNomeUsuario] = useState("");

    useEffect(() => {
        carregarDadosUsuario();
    }, []);

    async function carregarDadosUsuario() {
        try {
            const userData = await AsyncStorage.getItem("@user_data");
            if (userData) {
                const user = JSON.parse(userData);
                setNomeUsuario(user.nome || "Usuário");
            }
        } catch (error) {
            console.log("Erro ao carregar dados do usuário:", error);
        }
    }

    return (
        <View style={styles.body}>

            <View style={styles.container}>

                <View style={styles.header}>

                    <View style={styles.titulo}>

                        <Text style={styles.text}>Movie</Text>
                        <Text style={styles.textHub}>Hub</Text>

                    </View>
                    <View style={styles.article}>

                        <View style={{ marginTop: 15, marginBottom: 10 }}>
                            <Text style={{ fontSize: 22, color: colors.text || "#FFF", fontWeight: "bold" }}>
                                Bem-vindo, {nomeUsuario}!😊
                            </Text>

                        </View>

                        <View style={styles.addMovieSearch}>

                            <TouchableOpacity style = {styles.search} onPress={() => navigation.navigate("Search")}>

                                <Text style= {styles.textSearch}>Pesquisar por título ou gênero...</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate("addMovies")}>
                                <Text style={styles.buttonAddMovies}>+</Text>
                            </TouchableOpacity>

                        </View>

                    </View>


                </View>
            </View>
        </View>
    );
}