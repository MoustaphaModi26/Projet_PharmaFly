import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  logoContainer: {
    alignItems: "center",
    paddingVertical: 40,
    backgroundColor: "#fff",
    marginBottom: 16,
  },
  logoCircle: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: (width * 0.28) / 2,
    backgroundColor: "rgba(45,198,160,0.12)",
    borderWidth: 2,
    borderColor: "#2DC6A0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  logoText: {
    fontSize: 50,
  },
  appName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#222",
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 13,
    color: "#aaa",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
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
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  infoIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(45,198,160,0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: "#aaa",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
  descriptionText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 22,
    paddingVertical: 16,
  },
});