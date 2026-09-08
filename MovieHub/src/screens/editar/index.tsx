import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../infoMovies";
import { styles } from "./styles";

type Props = NativeStackScreenProps<RootStackParamList, "Editar">;

export default function Editar({ navigation, route }: Props) {
    const movie = route.params?.movie;


    const [capa, setCapa] = useState<string | undefined>(movie?.capa);

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

    return (
        <View style={styles.body}>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.backButtonText}>←</Text>
                    </TouchableOpacity>

                    <Text style={styles.text}>Editar Filme</Text>

                    <View style={styles.headerSpacer} />
                </View>

                <View style={styles.article}>
                    <View style={styles.capaText}>
                        <Text style={styles.textCapa}>Imagem do filme</Text>

                        <View style={styles.containerImg}>

                            {capa ? (

                                <Image
                                    style={styles.capa}
                                    source={{ uri: capa }}
                                    resizeMode="cover"
                                />
                            ) : (

                                <View style={[styles.capa, { justifyContent: "center", alignItems: "center" }]}>

                                    <Text style={{ color: "#777" }}>Sem Capa</Text>

                                </View>
                            )}

                            <View style={styles.imageButtonsContainer}>

                                <TouchableOpacity style={styles.imageButton} onPress={escolherDaGaleria}>

                                    <Text style={styles.imageButtonText}>Galeria</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.imageButton} onPress={tirarFoto}>

                                    <Text style={styles.imageButtonText}>Câmera</Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}