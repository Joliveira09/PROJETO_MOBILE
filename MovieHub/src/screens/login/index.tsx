import React, { useState } from "react";
import { View, Text, Image, TextInput, Pressable, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { supabase } from "../../services/supabase"; // Ajuste o caminho do seu arquivo supabase
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [marcado, setMarcado] = useState(false);
    const [loading, setLoading] = useState(false);

    async function entrar() {
        if (!email || !senha) {
            Alert.alert("Atenção", "Preencha todos os campos.");
            return;
        }

        setLoading(true);

        try {
            // Autenticação nativa do Supabase
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email.trim(),
                password: senha,
            });

            if (error) {
                Alert.alert("Erro de Autenticação", error.message);
                setLoading(false);
                return;
            }

            if (data.user) {
                navigation.navigate("Home");
            }
        } catch (error) {
            Alert.alert("Erro", "Ocorreu um erro ao tentar fazer login.");
        } finally {
            setLoading(false);
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
                        <TouchableOpacity style={styles.button} onPress={entrar} disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#FFF" />
                            ) : (
                                <Text style={styles.textButton}>Entrar</Text>
                            )}
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