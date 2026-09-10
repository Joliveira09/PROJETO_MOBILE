import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: colors.background,
        fontFamily: "Arial",
    },

    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
        paddingTop: 50,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },

    headerTitle: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 60,
    },

    article: {
        marginTop: 10,
    },

    text: {
        color: colors.text,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "center",
    },

    textHub: {
        color: "red",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "center",
    },

    buttonAddMovies: {
        color: colors.text,
        backgroundColor: colors.primary,
        borderRadius: 5,
        width: 50,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 35,
        textAlign: "center",
        marginTop: 10,
    },

    addMovieSearch: {},

    backButton: {
        marginRight: 10,
        padding: 5,
    },

    backButtonText: {
        color: colors.text,
        fontSize: 24,
        fontWeight: "900",
    },

    searchFilter: {
        flexDirection: "row"
    },

    searchInput: {
        backgroundColor: "#222",
        color: "#FFF",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#333",
    },

    filter: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: colors.primary,
        marginLeft: 8,
        paddingHorizontal: 10,
        justifyContent: "center",
    },

    textFilter: {
        color: colors.primary,
        fontWeight: "bold",
        fontFamily: "arial",
    },



    card: {
        flexDirection: "row",
        backgroundColor: "#1E1E1E",
        padding: 10,
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
    },

    capa: {
        width: 60,
        height: 90,
        borderRadius: 5,
        marginRight: 15,
    },

    info: {
        flex: 1,
    },

    titulo: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "bold",
    },

    subtitulo: {
        color: "#AAA",
        fontSize: 14,
        marginTop: 4,
    },

    nota: {
        color: "#FFD700",
        marginTop: 4,
    },

    emptyText: {
        color: "#888",
        textAlign: "center",
        marginTop: 30,
        fontSize: 15,
    },
});