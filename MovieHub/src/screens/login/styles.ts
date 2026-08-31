import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

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
        flexDirection: "row",
        alignItems: "center",
        width: 300,
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: colors.textSecondary,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },

    checkboxMarcado: {
        backgroundColor: "red",
        borderColor: "red",
    },

    check: {
        color: "white",
        fontWeight: "bold",
        fontSize: 14,
    },

    checkboxText: {
        color: colors.textSecondary,
        marginLeft: 8,
    },

    logar: {
        marginTop: 30,
    },
    
    button: {
        flex: 1,
        borderRadius: 5,
        backgroundColor: "red",
        height: 50,
        width: 300,
        alignItems: "center",
    },

    textButton: {
        color: "white",
        textAlign: "center",
        margin: 4,
        fontWeight: "bold",
    },
});