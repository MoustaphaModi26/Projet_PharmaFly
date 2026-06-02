import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  uploadSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
    gap: 12,
  },
  uploadBtn: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#2DC6A0",
    borderStyle: "dashed",
    gap: 8,
  },
  uploadBtnText: {
    fontSize: 13,
    color: "#2DC6A0",
    fontWeight: "600",
    textAlign: "center",
  },
  uploadIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "rgba(45,198,160,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    marginTop: 20,
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
  ordonnanceItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  ordonnanceIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  ordonnanceInfo: {
    flex: 1,
  },
  ordonnanceNom: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    marginBottom: 3,
  },
  ordonnanceDate: {
    fontSize: 12,
    color: "#aaa",
  },
  ordonnanceType: {
    fontSize: 11,
    fontWeight: "700",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 12,
  },
});