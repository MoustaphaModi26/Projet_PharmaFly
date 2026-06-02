import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HeaderBack({ navigation, title }) {
  return (
    <View style={styles.topBar}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={styles.topBarTitle}>{title}</Text>
      <View style={{ width: 40 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: "#2DC6A0",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  backBtn: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  topBarTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
  },
});