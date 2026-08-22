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
        width: 80,
        height: 80,
        resizeMode: "contain",
    },

    textImage: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 70,
    },

    loading: {
        marginTop: 24,
        transform: [{ scale: 1.2 }],
    },
});