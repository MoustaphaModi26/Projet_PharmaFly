import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
filterRow: {
  flexDirection: "row",
  paddingHorizontal: 20,
  paddingVertical: 14,
  gap: 8,
  flexGrow: 0,
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
    borderColor: "#2DC6A0",
  },
  filterBtnText: {
    fontSize: 13,
    color: "#555",
    fontWeight: "600",
  },
  filterBtnTextActive: {
    color: "#fff",
  },
  commandeCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  commandeHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  commandeId: {
    fontSize: 15,
    fontWeight: "800",
    color: "#222",
  },
  commandeDate: {
    fontSize: 12,
    color: "#aaa",
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "700",
  },
  commandeBody: {
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
    paddingTop: 12,
  },
  medicamentRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  medicamentNom: {
    fontSize: 14,
    color: "#555",
    flex: 1,
    marginLeft: 8,
  },
  medicamentQte: {
    fontSize: 13,
    color: "#aaa",
  },
  commandeFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  commandeTotal: {
    fontSize: 16,
    fontWeight: "800",
    color: "#2DC6A0",
  },
  commandePharmacieNom: {
    fontSize: 12,
    color: "#aaa",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 60,
  },
  emptyText: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 12,
  },
});