import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  tabContainer: {
    position: "absolute",
    bottom: 0,
    width: width,
    backgroundColor: "transparent",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 16,
    paddingBottom: 16,
    paddingTop: -5,
    borderTopWidth: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 16,
    position: "relative",
  },
  activeIndicatorWrapper: {
    position: "absolute",
    top: 2,
    alignSelf: "center",
    alignItems: "center",
  },
  activeIndicator: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#2DC6A0",
  },
  iconWrapper: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
  },
  iconWrapperActive: {
    backgroundColor: "#2DC6A0",
    shadowColor: "#2DC6A0",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  tabIcon: {
    fontSize: 22,
  },
  tabLabel: {
    fontSize: 11,
    color: "#aaa",
    fontWeight: "600",
  },
  tabLabelActive: {
    color: "#2DC6A0",
    fontWeight: "800",
  },
});