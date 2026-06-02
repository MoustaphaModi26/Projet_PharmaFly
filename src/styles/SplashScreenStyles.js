import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2DC6A0",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    alignItems: "center",
  },
  logoContainer: {
    width: width * 0.40,
    height: width * 0.40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  logoPlaceholder: {
    fontSize: 80,
  },
  appName: {
    fontSize: 36,
    fontWeight: "800",
    color: "#fff",
    letterSpacing: 1,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 15,
    color: "rgba(255,255,255,0.8)",
    letterSpacing: 1.2,
  },
});