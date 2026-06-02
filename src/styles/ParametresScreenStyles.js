import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#aaa",
    paddingTop: 16,
    paddingBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(45,198,160,0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  itemLabel: {
    flex: 1,
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
});