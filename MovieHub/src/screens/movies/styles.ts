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
    },

    header: {
        width: "100%", 
        alignItems: "center", 
        paddingTop: 70,
    },

    titulo: {
        color: colors.text,
        fontSize: 34,
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Arial",
    },
});