import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background || "#0F1115",
    },

    container: {
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 100,
    },

    topHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },

    iconButton: {
        padding: 5,
    },

    topIconText: {
        color: "#FFF",
        fontSize: 22,
    },

    titulo: {
        flexDirection: "row",
        alignItems: "center",
    },

    text: {
        color: colors.text || "#FFF",
        fontWeight: "bold",
        fontSize: 22,
    },

    textHub: {
        color: colors.primary || "#FFC107",
        fontWeight: "bold",
        fontSize: 22,
    },

    greetingContainer: {
        marginVertical: 10,
    },

    greetingText: {
        fontSize: 22,
        color: colors.text || "#FFF",
        fontWeight: "bold",
    },

    subGreetingText: {
        fontSize: 14,
        color: colors.textSecondary || "#888",
        marginTop: 4,
    },

    addMovieSearch: {
        flexDirection: "row",
        marginVertical: 15,
        gap: 10,
        alignItems: "center",
    },

    search: {
        flex: 1,
        backgroundColor: "#1A1D24",
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#2A2E39",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    searchIcon: {
        fontSize: 14,
    },

    textSearch: {
        color: "#666",
        fontSize: 14,
    },

    buttonAddMovies: {
        backgroundColor: colors.primary || "#FFC107",
        borderRadius: 12,
        width: 48,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
    },

    buttonAddText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 26,
    },

    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 12,
    },

    sectionTitle: {
        color: colors.text || "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 15,
        marginBottom: 10,
    },

    seeAllText: {
        color: colors.primary || "#FFC107",
        fontSize: 13,
        fontWeight: "bold",
    },

    statsContainer: {
        flexDirection: "row",
        gap: 8,
        marginBottom: 10,
    },

    statCard: {
        flex: 1,
        backgroundColor: "#1A1D24",
        borderRadius: 12,
        padding: 10,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#252932",
    },

    
    statIcon: {
        fontSize: 18,
        marginBottom: 6,
    },

    statLabel: {
        color: "#777",
        fontSize: 9,
        textAlign: "center",
        marginBottom: 4,
    },

    statValue: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    horizontalList: {
        gap: 12,
        paddingRight: 20,
    },

    movieCard: {
        width: 110,
    },

    movieCover: {
        width: 110,
        height: 155,
        borderRadius: 10,
        backgroundColor: "#252932",
        marginBottom: 6,
    },

    noCover: {
        justifyContent: "center",
        alignItems: "center",
    },

    movieTitle: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold",
    },

    movieYear: {
        color: "#777",
        fontSize: 11,
        marginTop: 2,
    },

    ratingContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        marginTop: 2,
    },

    starIcon: {
        color: "#FFC107",
        fontSize: 12,
    },

    ratingText: {
        color: "#FFF",
        fontSize: 11,
        fontWeight: "bold",
    },

    emptyText: {
        color: "#666",
        fontSize: 13,
        fontStyle: "italic",
        marginVertical: 10,
    },

});