import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TextInput } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Login() {

    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");

    function entrar() {
        console.log("Email:", email);
        console.log("Senha:", senha);
    }

    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.textImage}>
                    <Image
                        source={require("../../../assets/images/camera.png")}
                        style={styles.image}
                    />
                    <View style = {styles.tituloSubtitulo}>
                        <View style={styles.titulo}>
                            <Text style={styles.text}>Movie</Text>
                            <Text style={styles.textHub}>Hub</Text>
                        </View>
                        <Text style = {styles.subtitulo}>Faça login para continuar</Text>
                        <View/>
                    </View>
                </View>
                <TextInput 
                style = {styles.input}
                placeholder="Seu@email.com"
                placeholderTextColor={colors.textSecondary}
                />
            </View>
        </View>
            );
}