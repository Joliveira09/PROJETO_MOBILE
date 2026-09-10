import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background || "#121212",
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
        color: colors.text || "#FFF",
        fontSize: 24,
        fontWeight: "900",
    },

    deleteButton: {
        padding: 5,
    },

    deleteButtonText: {
        fontSize: 20,
    },

    text: {
        color: colors.text || "#FFF",
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
        width: 120,
        height: 180,
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

    form: {
        marginTop: 10,
    },

    label: {
        color: colors.text || "#FFF",
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 6,
    },

    input: {
        backgroundColor: "#1E1E1E",
        color: colors.text || "#FFF",
        paddingHorizontal: 14,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 15,
        borderWidth: 1,
        borderColor: "#333",
    },

    textArea: {
        height: 100,
        textAlignVertical: "top",
    },

    row: {
        flexDirection: "row",
        gap: 12,
    },

    flex1: {
        flex: 1,
    },

    starsContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 6,
    },

    starText: {
        fontSize: 28,
        color: "#FFD700",
    },

    statusContainer: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 6,
    },

    statusButton: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 6,
        borderRadius: 8,
        backgroundColor: "#1E1E1E",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#333",
    },

    statusButtonSelected: {
        backgroundColor: colors.primary || "red",
        borderColor: colors.primary || "red",
    },

    statusText: {
        color: colors.textSecondary || "#AAA",
        fontSize: 12,
        fontWeight: "600",
    },

    statusTextSelected: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },

    actionButtonsContainer: {
        marginTop: 30,
        gap: 12,
    },

    saveButton: {
        backgroundColor: colors.primary || "red",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
    },

    saveButtonText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 16,
    },

    cancelButton: {
        backgroundColor: "transparent",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#444",
    },

    cancelButtonText: {
        color: colors.textSecondary || "#AAA",
        fontWeight: "bold",
        fontSize: 15,
    },
});