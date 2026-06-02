import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2DC6A0",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
  },
  logoContainer: {
    width: width * 0.30,
    height: width * 0.30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  logoPlaceholder: {
    fontSize: 70,
  },
  appName: {
    fontSize: 32,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    letterSpacing: 1,
    marginBottom: 20,
  },
  card: {
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
  forgotBtn: {
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  forgotText: {
    color: "#2DC6A0",
    fontSize: 13,
  },
  rememberRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#2DC6A0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: "#2DC6A0",
  },
  checkboxTick: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "800",
  },
  rememberText: {
    color: "#555",
    fontSize: 14,
  },
  loginBtn: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#2DC6A0",
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  registerBtn: {
    width: "100%",
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#2DC6A0",
  },
  registerBtnText: {
    color: "#2DC6A0",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  errorText: {
  color: "#e74c3c",
  fontSize: 12,
  marginTop: -10,
  marginBottom: 8,
  marginLeft: 4,
},
});