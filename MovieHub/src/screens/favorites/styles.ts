import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  header: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  tituloHeader: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "center",
  },

  capa: {
    width: 60,
    height: 80,
    borderRadius: 8,
    backgroundColor: "#2C2C2E",
  },

  capaPlaceholder: {
    justifyContent: "center",
    alignItems: "center",
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  cardTitulo: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },

  cardSubtitulo: {
    color: "#8E8E93",
    fontSize: 12,
    marginBottom: 6,
  },

  cardNota: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: "bold",
  },

  heartButton: {
    padding: 8,
  },

  heartActive: {
    color: "#FF3B30",
    fontSize: 22,
  },

  emptyText: {
    color: "#8E8E93",
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
  },
});