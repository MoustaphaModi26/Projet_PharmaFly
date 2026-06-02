import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
 header: {
  backgroundColor: "#2DC6A0",
  paddingTop: 55,
  paddingBottom: 20,
  paddingHorizontal: 10,
},
headerTop: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 9,
},
headerTitle: {
  fontSize: 20,
  fontWeight: "800",
  color: "#fff",
},
headerSubtitle: {
  fontSize: 13,
  color: "rgba(255,255,255,0.8)",
  marginTop: -20,
},
headerIcons: {
  flexDirection: "row",
  alignItems: "center",
  gap: 9,
},
avatarBtn: {
  width: 38,
  height: 38,
  borderRadius: 19,
  backgroundColor: "rgba(255,255,255,0.3)",
  alignItems: "center",
  justifyContent: "center",
},
avatarText: {
  color: "#fff",
  fontSize: 14,
  fontWeight: "800",
},

  filterRow: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 14,
    gap: 10,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#ddd",
  },
  filterBtnActive: {
    backgroundColor: "#2DC6A0",
    borderColor: "#2dc6a0",
  },
  filterBtnText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "600",
  },
  filterBtnTextActive: {
    color: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "800",
    color: "#222",
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  pharmacieCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  pharmacieIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  pharmacieIcon: {
    fontSize: 22,
  },
  pharmacieInfo: {
    flex: 1,
  },
  pharmacieNom: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
    marginBottom: 3,
  },
  pharmacieQuartier: {
    fontSize: 13,
    color: "#888",
    marginBottom: 4,
  },
  pharmcieTelephone: {
    fontSize: 12,
    color: "#aaa",
  },
  gardeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  gardeBadgeText: {
    fontSize: 11,
    fontWeight: "700",
  },
  emptyText: {
    textAlign: "center",
    color: "#aaa",
    fontSize: 14,
    marginTop: 40,
  },
  tabRow: {
  flexDirection: "row",
  paddingHorizontal: 20,
  paddingTop: 14,
  gap: 8,
},
tabBtn: {
  flex: 1,
  paddingVertical: 10,
  borderRadius: 10,
  alignItems: "center",
  backgroundColor: "#fff",
  borderWidth: 1.5,
  borderColor: "#ddd",
},
tabBtnActive: {
  backgroundColor: "#2DC6A0",
  borderColor: "#2DC6A0",
},
tabBtnText: {
  fontSize: 12,
  color: "#555",
  fontWeight: "600",
},
tabBtnTextActive: {
  color: "#fff",
},
indicatorRow: {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  paddingVertical: 10,
  gap: 6,
},
indicator: {
  width: 6,
  height: 6,
  borderRadius: 3,
  backgroundColor: "#ddd",
},
indicatorActive: {
  width: 20,
  backgroundColor: "#2DC6A0",
},
});