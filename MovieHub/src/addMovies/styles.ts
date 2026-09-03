import { StyleSheet } from "react-native";
import { colors } from "../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    header: {
        width: "100%", 
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", 
        paddingHorizontal: 20,
        position: "relative",
        paddingTop: 70,
    },

    titulo: {
        color: colors.text,
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 20,
    },

    buttonVoltar: {
        position: "absolute",
        left: 20,
        top: 70,
        padding: 5,
        zIndex: 10,
    },

    irHome: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "900",
    },

    label: {
        color: colors.textSecondary || "#AAA",
        fontSize: 14,
        fontWeight: "600",
        marginTop: 12,
        marginBottom: 6,
    },

    input: {
        backgroundColor: "#222",
        color: colors.text,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        fontSize: 16,
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

    // Imagem / Capa
    previewCapa: {
        width: 120,
        height: 180,
        borderRadius: 8,
        alignSelf: "center",
        marginVertical: 10,
    },

    imageButtonsContainer: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 10,
    },

    imageButton: {
        flex: 1,
        backgroundColor: "#222",
        paddingVertical: 10,
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

    // Estrelas
    starsContainer: {
        flexDirection: "row",
        gap: 12,
        marginVertical: 6,
    },

    starText: {
        fontSize: 32,
        color: colors.primary || "red",
    },

    // Status
    statusContainer: {
        flexDirection: "row",
        gap: 8,
        marginVertical: 6,
    },

    statusButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: "#222",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#333",
    },

    statusButtonSelected: {
        backgroundColor: colors.primary || "red",
        borderColor: colors.primary || "red",
    },

    statusText: {
        color: colors.text,
        fontSize: 12,
        fontWeight: "600",
    },

    statusTextSelected: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },

    // Botões de Ação Final
    actionButtonsContainer: {
        marginTop: 24,
        marginBottom: 40,
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
        fontSize: 16,
        fontWeight: "bold",
    },

    cancelButton: {
        backgroundColor: "transparent",
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.textSecondary || "#AAA",
    },

    cancelButtonText: {
        color: colors.textSecondary || "#AAA",
        fontSize: 15,
        fontWeight: "600",
    },
});