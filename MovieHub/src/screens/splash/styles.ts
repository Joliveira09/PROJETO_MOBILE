import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
    },

    container: {
        borderRadius: 10,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },

    titulo: {
        flexDirection: "row"
    },

    text: {
        color: colors.text,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },

    textHub: {
        color: "red",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },

    image: {
        width: 180,
        height: 180,
        resizeMode: "contain",
        marginBottom: 8,
    },

    loading: {
        marginTop: 24,
        transform: [{ scale: 1.2 }],
    },
});