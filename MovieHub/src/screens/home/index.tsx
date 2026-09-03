import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
                // Pega a propriedade nome salva no cadastro (ou define um padrão)
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
                    <View style = {styles.article}>

                        <View style={{ marginTop: 15, marginBottom: 10 }}>
                            <Text style={{ fontSize: 22, color: colors.text || "#FFF", fontWeight: "bold" }}>
                                Bem-vindo, {nomeUsuario}!😊
                            </Text>

                        </View>

                        <View style = {styles.addMovieSearch}>


                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate("addMovies")}>
                            <Text style={styles.buttonAddMovies}>+</Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </View>
        </View>
    );
}