import { View, Text, StyleSheet} from "react-native";
import { colors } from "./theme/colors"; 


export default function Home() {
    return (
        <View style = {styles.body}>

          <View style = {styles.container}>

            <Text style = {styles.text}>Olá Mundo!</Text>

          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    backgroundColor: colors.cardBackground,
    borderRadius: 10,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",

  },

  text: {
    color: colors.text,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 24,
  },
});