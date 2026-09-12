import { StyleSheet } from "react-native";
import { colors as themeColors } from "../../theme/colors";

export const colors = {
    primary: themeColors.primary,
    background: "#0F141E",
    cardBg: "#171E2B",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    border: "#1F2937",
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },

    scrollContent: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 30,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
        marginTop: 20,
    },

    backButton: {
        padding: 4,
        fontWeight: "bold",
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: "600",
        color: colors.textPrimary,
    },
    cardMovie: {
        flexDirection: "row",
        backgroundColor: colors.cardBg,
        borderRadius: 16,
        padding: 14,
        marginBottom: 24,
    },
    poster: {
        width: 100,
        height: 145,
        borderRadius: 10,
    },
    posterPlaceholder: {
        backgroundColor: "#262E3D",
        justifyContent: "center",
        alignItems: "center",
    },
    infoContainer: {
        flex: 1,
        marginLeft: 14,
        justifyContent: "space-between",
    },
    movieTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: colors.textPrimary,
    },
    movieSubtitle: {
        fontSize: 12,
        color: colors.textSecondary,
        marginTop: 2,
    },
    ratingRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    ratingText: {
        color: colors.textPrimary,
        fontSize: 13,
        fontWeight: "bold",
        marginLeft: 4,
        marginRight: 10,
    },
    badgeStatus: {
        backgroundColor: colors.primary,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 12,
    },
    badgeStatusText: {
        color: "#000",
        fontSize: 11,
        fontWeight: "bold",
    },
    description: {
        fontSize: 12,
        color: colors.textSecondary,
        lineHeight: 16,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: colors.textPrimary,
        marginBottom: 16,
    },
    gridContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 12,
        marginBottom: 24,
    },
    gridItem: {
        width: "22%",
        backgroundColor: colors.cardBg,
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: "center",
        justifyContent: "center",
    },
    iconBg: {
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    iconLabel: {
        fontSize: 11,
        color: colors.textSecondary,
    },
    cancelButton: {
        width: "100%",
        height: 48,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    cancelButtonText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: "bold",
    },
});