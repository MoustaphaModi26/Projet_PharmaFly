import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#2DC6A0",
    padding: 24,
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 30,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "rgba(255,255,255,0.3)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 36,
  },
  userName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 13,
    color: "rgba(255,255,255,0.8)",
  },
  menuSection: {
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(45,198,160,0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  menuIconEmoji: {
    fontSize: 18,
  },
  menuLabel: {
    flex: 1,
    fontSize: 15,
    color: "#333",
    fontWeight: "500",
  },
  menuArrow: {
    fontSize: 20,
    color: "#ccc",
  },
  switchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
    marginTop: 24,
    padding: 16,
    backgroundColor: "rgba(231,76,60,0.08)",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "rgba(231,76,60,0.2)",
  },
  logoutIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(231,76,60,0.1)",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  logoutIconEmoji: {
    fontSize: 18,
  },
  logoutText: {
    fontSize: 15,
    color: "#e74c3c",
    fontWeight: "700",
  },
  sectionTitle: {
  fontSize: 11,
  fontWeight: "800",
  color: "#aaa",
  letterSpacing: 1.2,
  marginTop: 16,
  marginBottom: 4,
  paddingHorizontal: 4,
},
});