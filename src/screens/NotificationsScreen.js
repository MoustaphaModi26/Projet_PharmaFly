import React from "react";
import { View } from "react-native";
import HeaderBack from "../components/HeaderBack";

export default function NotificationsScreen({ navigation }) {
  return <View style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
    <HeaderBack navigation={navigation} title="Notifications" />
  </View>;
}