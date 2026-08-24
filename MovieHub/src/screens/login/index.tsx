import CheckBox from "@react-native-community/checkbox";
import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TextInput } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Login() {

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
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                value={marcado}
                                onValueChange={setMarcado}
                            />

                            <Text style={styles.checkboxText}>
                                Lembrar de mim
                            </Text>
                        </View>
                    </View>

                </View>

            </View>
        </View>
            );
}