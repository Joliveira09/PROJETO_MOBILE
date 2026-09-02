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
        marginTop: 50,
    },

    tituloSubtitulo: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 80,

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
        borderRadius: 5,
        width: 300,
        height: 30,
        marginBottom: 15,
    },

    form: {
        alignItems: "center",
        marginBottom: 20,
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

    cadastrar: {
        marginTop: 30,
    },
    
    button: {
        borderRadius: 5,
        backgroundColor: "red",
        height: 35,
        width: 300,
        alignItems: "center",
    },

    textButton: {
        color: "white",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        margin: 4,
        fontSize: 24,
        fontWeight: "bold",
    },

    login: {
        flexDirection: "row",
        marginTop: 15,
    },

    loginText: {
        color: colors.textSecondary,
        paddingRight: 6,
    },
});