import React from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Splash() {
    return (
        <View style={styles.body}>
            <View style={styles.container}>
                <View style={styles.textImage}>
                    <Image
                        source={require("../../../assets/images/camera.png")}
                        style={styles.image}
                    />
                    <View style={styles.titulo}>
                        <Text style={styles.text}>Movie</Text>
                        <Text style={styles.textHub}>Hub</Text>
                    </View>
                    <View />

                </View>
            </View>
        </View>
            );
}