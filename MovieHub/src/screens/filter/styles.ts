import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background || "#0F1115",
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        paddingBottom: 15,
        paddingHorizontal: 20,
        position: "relative",
        marginTop: 20,
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
    backButton: {
        position: "absolute",
        left: 20,
        top: 50,
        padding: 5,
    },
    backButtonText: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
    },
    limparButton: {
        position: "absolute",
        right: 20,
        top: 52,
    },
    limparText: {
        color: colors.primary,
        fontSize: 15,
        fontWeight: "bold",
    },
    container: {
        paddingHorizontal: 20,
        paddingBottom: 40,
    },
    label: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 18,
        marginBottom: 8,
    },
    input: {
        backgroundColor: "#1A1D24",
        borderWidth: 1,
        borderColor: "#2A2E39",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        color: "#FFF",
        fontSize: 14,
    },
    statusContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
    },
    statusChip: {
        backgroundColor: "#1A1D24",
        borderWidth: 1,
        borderColor: "#2A2E39",
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
    },
    statusChipSelected: {
        backgroundColor: colors.primary || "#FFC107",
        borderColor: colors.primary || "#FFC107",
    },
    statusText: {
        color: "#888",
        fontSize: 13,
        fontWeight: "500",
    },
    statusTextSelected: {
        color: "#000",
        fontWeight: "bold",
    },
    row: {
        flexDirection: "row",
        gap: 12,
    },
    column: {
        flex: 1,
    },
    starsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    starsContainer: {
        flexDirection: "row",
        gap: 6,
    },
    starIcon: {
        color: colors.primary,
        fontSize: 28,
    },
    starLabel: {
        color: colors.primary,
        fontSize: 13,
        fontWeight: "bold",
    },
    switchRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    labelSwitch: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    btnAplicar: {
        backgroundColor: colors.primary,
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 10,
    },
    btnAplicarText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 16,
    },
    btnCancelar: {
        borderWidth: 1,
        borderColor: colors.primary,
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 12,
    },
    btnCancelarText: {
        color: colors.primary,
        fontWeight: "bold",
        fontSize: 16,
    },
});