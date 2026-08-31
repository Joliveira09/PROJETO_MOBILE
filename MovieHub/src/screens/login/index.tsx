
import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TextInput, Pressable, Button, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Login({ navigation }) {

    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");
    const [marcado, setMarcado] = useState(false);


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
                <View style = {styles.form}>

                    <View style = {styles.textInput}>
                        <Text style = {styles.info}>E-mail</Text>
                        <TextInput 
                        style = {styles.input}
                        placeholder="Seu@email.com"
                        placeholderTextColor={colors.textSecondary}
                        />
                    </View>
                    <View style = {styles.textInput}>
                        <Text style = {styles.info}>Senha</Text>
                        <TextInput 
                        style = {styles.input}
                        placeholder="Digite sua Senha"
                        placeholderTextColor={colors.textSecondary}
                        />
                    </View>

                    <Pressable
                        style = {styles.checkboxContainer}
                        onPress={() => setMarcado(!marcado)}
                    >
                        <View style = {[styles.checkbox, marcado && styles.checkboxMarcado]}>
                            {marcado && (
                                <Text style = {styles.check}>
                                    ✓
                                </Text>
                            )}
                        </View>
                        <Text style={styles.checkboxText}>
                            Manter conectado
                        </Text>
                    </Pressable>

                    <View style = {styles.logar}>
                        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate("Home")}>
                            <Text style = {styles.textButton}>
                                Entrar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </View>
            );
}