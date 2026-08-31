import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({

    body: {
        flex: 1,
        backgroundColor: colors.background,
    },

    container: {
  
    },

    titulo: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 15,
    },

    text: {
        color: colors.text,
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },

    textHub: {
        color: "red",
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
    },
});