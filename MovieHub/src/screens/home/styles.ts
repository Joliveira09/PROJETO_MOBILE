import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: colors.background,
        fontFamily: "Arial",
    },

    container: {
        marginLeft: 20,
    },

    header: {

    },

    titulo: {
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
  
    },

    addMovieSearch: {
        flexDirection: "row",
        marginTop: 10,
        gap: 10,
        alignItems: "center",
    },

    search: {
        backgroundColor: "#222",
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 8,
        borderWidth: 1,
        width: 300,
        borderColor: "#444"
    },

    textSearch: {
        color: "#888",
        fontFamily: "Arial",
        fontSize: 17,

    },
});