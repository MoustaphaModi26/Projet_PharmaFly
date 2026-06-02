import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2DC6A0",
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    paddingBottom: 24,
  },
  logoContainer: {
    width: width * 0.20,
    height: width * 0.20,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  logoPlaceholder: {
    fontSize: 50,
  },
  appName: {
    fontSize: 24,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 28,
    paddingTop: 36,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    color: "#222",
    marginBottom: 24,
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    width: "100%",
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: "transparent",
  },
  inputFocused: {
    borderColor: "#2DC6A0",
    backgroundColor: "rgba(45,198,160,0.06)",
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#333",
    fontSize: 15,
  },
  eyeBtn: {
    paddingLeft: 8,
  },
  eyeIcon: {
    fontSize: 18,
  },
  registerBtn: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#2DC6A0",
    marginTop: 8,
  },
  registerBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  loginRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  loginText: {
    color: "#555",
    fontSize: 14,
  },
  loginLink: {
    color: "#2DC6A0",
    fontSize: 14,
    fontWeight: "700",
  },
  errorText: {
  color: "#e74c3c",
  fontSize: 12,
  marginTop: -10,
  marginBottom: 8,
  marginLeft: 4,
},
});