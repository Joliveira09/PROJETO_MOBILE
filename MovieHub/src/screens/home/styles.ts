import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: colors.background,
        fontFamily: "Arial",
    },

    container: {
  
    },

    header: {

    },

    titulo: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 35,
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
});