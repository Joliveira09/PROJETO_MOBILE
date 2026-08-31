import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TextInput, Pressable, Button, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Movies() {

    return (

        <View style = {styles.body}>
            <View style = {styles.container}>

                <View style = {styles.header}>

                    <Text style = {styles.titulo}>
                        Filmes
                    </Text>
                </View>
            </View>
        </View>
    );
}