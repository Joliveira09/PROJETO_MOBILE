
import React, {useState} from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, TextInput, Pressable, Button, TouchableOpacity } from "react-native";
import { colors } from "../../theme/colors";
import { styles } from "./styles";

export default function Home() {
    
    return(

        <View style = {styles.body}>
            <View style = {styles.container}>
                <View style = {styles.titulo}>
                    <View style={styles.titulo}>

                        <Text style={styles.text}>Movie</Text>
                        <Text style={styles.textHub}>Hub</Text>

                    </View>
                </View>
            </View>
        </View>
    );
}