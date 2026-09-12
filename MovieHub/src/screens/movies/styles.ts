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
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
    position: "relative",
  },

  tituloHeader: {
    color: colors.text,
    fontSize: 24,
    fontWeight: "bold",
  },

  iconButton: {
    position: "absolute",
    right: 0,
    padding: 5,
  },

  funnelIcon: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: "bold",
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 10,
  },

  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 44,
  },

  searchIcon: {
    fontSize: 14,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
  },

  filterButton: {
    backgroundColor: "#1C1C1E",
    borderRadius: 12,
    width: 44,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
  },

  filterIcon: {
    fontSize: 22,
    color: colors.primary,
  },

  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2C2C2E",
  },

  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },

  tabButtonActive: {
    borderBottomColor: colors.primary,
  },

  tabText: {
    color: "#8E8E93",
    fontSize: 13,
    fontWeight: "500",
  },

  tabTextActive: {
    color: colors.primary,
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

  rowInfo: {},

  statusBadge: {},

  heartButton: {
    padding: 8,
  },

  heartActive: {
    color: "#FF3B30",
    fontSize: 22,
  },

  heartInactive: {
    color: "#8E8E93",
    fontSize: 22,
  },

  emptyText: {
    color: "#8E8E93",
    textAlign: "center",
    marginTop: 40,
    fontSize: 14,
  },

  statusBadgeText: {
    color: colors.textSecondary,
  },

});