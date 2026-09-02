
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TextInput, Pressable, Button, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [marcado, setMarcado] = useState(false);


    function entrar() {
        console.log("Email:", email);
        console.log("Senha:", senha);
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
                        />

                    </View>
                    <View style={styles.textInput}>
                        <Text style={styles.info}>E-mail</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Seu@email.com"
                            placeholderTextColor={colors.textSecondary}
                        />

                        <View style={styles.textInput}>
                            <Text style={styles.info}>Senha</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Mínimo 8 caracteres"
                                placeholderTextColor={colors.textSecondary}
                            />

                            <View style={styles.textInput}>
                                <Text style={styles.info}>Confirmar senha</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite novamente sua senha"
                                    placeholderTextColor={colors.textSecondary}
                                />

                            </View>
                        </View>
                        <View style={styles.cadastrar}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Home")}>
                                <Text style={styles.textButton}>
                                    Cadastrar
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.login}>
                            <Text style={styles.loginText}>
                                Já tem sua conta?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                <Text style={[styles.loginText, { color: colors.primary }]}>
                                    Fazer login
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        </View>
    );
}