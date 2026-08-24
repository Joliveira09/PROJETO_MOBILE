import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";
import CheckBoxWithRef from "@react-native-community/checkbox/dist/js/CheckBox.ios";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        flex: 1,
        alignItems: "center",
        borderRadius: 10,
        padding: 24,
    },

    titulo: {
        flexDirection: "row"
    },

    tituloSubtitulo: {
        flexDirection: "column",
    },

    text: {
        color: colors.text,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },

    subtitulo: {
        color: colors.textSecondary
    },

    textHub: {
        color: "red",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },

    image: {
        width: 80,
        height: 80,
        resizeMode: "contain",
    },

    textImage: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 70,
        marginBottom: 85,
    },

    loading: {
        marginTop: 24,
        transform: [{ scale: 1.2 }],
    },

    info: {
        color: colors.textSecondary,
        marginBottom: 5,
    },

    input: {
        backgroundColor: colors.inputBackground,
        color: colors.textSecondary,
        padding: 3,
        marginBottom: 16,
        borderRadius: 5,
        width: 300,
        height: 30,
    },

    form: {
        alignItems: "center",
    },

    textInput: {
        alignItems: "flex-start",
    },

    checkboxContainer: {

    },

    checkboxText: {
        
    },
});