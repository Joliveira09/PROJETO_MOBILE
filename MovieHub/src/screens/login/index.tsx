import React, { useState } from "react";
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [marcado, setMarcado] = useState(false);

    async function entrar() {
        if (!email || !senha) {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return;
        }

        try {
            const userData = await AsyncStorage.getItem("@user_data");

            if (!userData) {
                Alert.alert("Erro", "Usuário não encontrado.");
                return;
            }

            const user = JSON.parse(userData);

            if (user.email === email && user.senha === senha) {
                if (marcado) {
                    await AsyncStorage.setItem("@user_logged", "true");
                }

                navigation.navigate("Home");
            } else {
                Alert.alert("Erro", "E-mail ou senha incorretos.");
            }
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao tentar fazer login.");
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.textImage}>
                    <Image
                        source={require("../../../assets/images/camera.png")}
                        style={styles.image}
                    />
                    <View style={styles.tituloSubtitulo}>
                        <View style={styles.titulo}>
                            <Text style={styles.text}>Movie</Text>
                            <Text style={styles.textHub}>Hub</Text>
                        </View>
                        <Text style={styles.subtitulo}>Faça login para continuar</Text>
                    </View>
                </View>

                <View style={styles.form}>
                    <View style={styles.textInput}>
                        <Text style={styles.info}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu@email.com"
                            placeholderTextColor={colors.textSecondary}
                            value={email}
                            onChangeText={setEmail}
                            autoCapitalize="none"
                            keyboardType="email-address"
                        />
                    </View>

                    <View style={styles.textInput}>
                        <Text style={styles.info}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite sua Senha"
                            placeholderTextColor={colors.textSecondary}
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                        />
                    </View>

                    <Pressable
                        style={styles.checkboxContainer}
                        onPress={() => setMarcado(!marcado)}
                    >
                        <View style={[styles.checkbox, marcado && styles.checkboxMarcado]}>
                            {marcado && <Text style={styles.check}>✓</Text>}
                        </View>
                        <Text style={styles.checkboxText}>Manter conectado</Text>
                    </Pressable>

                    <View style={styles.logar}>

                        <TouchableOpacity style={styles.button} onPress={entrar}>
                            <Text style={styles.textButton}>Entrar</Text>
                        </TouchableOpacity>

                        <View style={styles.cadastrar}>

                            <Text style={styles.cadastrarText}>Ainda não tem conta? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                                <Text style={[styles.cadastrarText, { color: colors.primary }]}>
                                    Cadastrar
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}