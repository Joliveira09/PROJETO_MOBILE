import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },

    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        marginBottom: 20,
    },

    headerSpacer: {
        width: 30,
    },

    backButton: {
        padding: 5,
    },

    backButtonText: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "900",
    },

    text: {
        color: colors.text,
        fontWeight: "bold",
        fontSize: 22,
        textAlign: "center",
    },

    article: {
        marginTop: 10,
    },

    capaText: {
        marginBottom: 20,
    },

    textCapa: {
        color: colors.textSecondary || "#AAA",
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 12,
    },

    containerImg: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15, 
    },

    capa: {
        width: 180,
        height: 120,
        borderRadius: 8,
        backgroundColor: "#2C2C2E",
    },

    imageButtonsContainer: {
        flex: 1, 
        flexDirection: "column", 
        gap: 10,
    },

    imageButton: {
        backgroundColor: "#222",
        width: 160,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.primary || "red",
    },

    imageButtonText: {
        color: colors.primary || "red",
        fontWeight: "bold",
        fontSize: 14,
    },
});