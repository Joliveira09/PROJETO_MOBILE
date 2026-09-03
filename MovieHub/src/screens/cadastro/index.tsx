import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    async function handleCadastrar() {
        if (!nome || !email || !senha || !confirmarSenha) {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return;
        }

        if (senha.length < 8) {
            Alert.alert("Atenção", "A senha deve ter no mínimo 8 caracteres.");
            return;
        }

        if (senha !== confirmarSenha) {
            Alert.alert("Atenção", "As senhas não coincidem.");
            return;
        }

        try {
            const novoUsuario = { nome, email, senha };
            await AsyncStorage.setItem("@user_data", JSON.stringify(novoUsuario));

            Alert.alert("Sucesso", "Cadastro realizado com sucesso!", [
                { text: "OK", onPress: () => navigation.navigate("Login") }
            ]);
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao realizar o cadastro.");
        }
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.tituloSubtitulo}>
                    <View>
                        <Text style={styles.text}>Criar Conta</Text>
                        <Text style={styles.subtitulo}>Preencha os dados abaixo</Text>
                    </View>
                </View>

                <View style={styles.form}>

                    <View style={styles.textInput}>
                        <Text style={styles.info}>Nome completo</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu nome"
                            placeholderTextColor={colors.textSecondary}
                            value={nome}
                            onChangeText={setNome}
                        />
                    </View>

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

                    {/* Campo Senha */}
                    <View style={styles.textInput}>
                        <Text style={styles.info}>Senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Mínimo 8 caracteres"
                            placeholderTextColor={colors.textSecondary}
                            value={senha}
                            onChangeText={setSenha}
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.textInput}>
                        <Text style={styles.info}>Confirmar senha</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite novamente sua senha"
                            placeholderTextColor={colors.textSecondary}
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            secureTextEntry
                        />
                    </View>

                    <View style={styles.cadastrar}>
                        <TouchableOpacity style={styles.button} onPress={handleCadastrar}>
                            <Text style={styles.textButton}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.login}>
                        <Text style={styles.loginText}>Já tem sua conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={[styles.loginText, { color: colors.primary }]}>
                                Fazer login
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}