import React from "react";
import { View, Text, TouchableOpacity, Switch, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderBack from "../components/HeaderBack";
import styles from "../styles/ParametresScreenStyles";

export default function ParametresScreen({ navigation }) {
  const [notifications, setNotifications] = React.useState(true);

  const sections = [
    {
      title: "Apparence & Langue",
      items: [
        {
          icon: "color-palette-outline",
          label: "Apparence",
          type: "arrow",
          onPress: () => navigation.navigate("Apparence"),
        },
        {
          icon: "language-outline",
          label: "Langue",
          type: "arrow",
          onPress: () => navigation.navigate("Langue"),
        },
      ],
    },
    {
      title: "Notifications",
      items: [
        {
          icon: "notifications-outline",
          label: "Notifications",
          type: "switch",
          value: notifications,
          onChange: setNotifications,
        },
      ],
    },
    {
      title: "Confidentialité & Sécurité",
      items: [
        {
          icon: "shield-outline",
          label: "Confidentialité & Sécurité",
          type: "arrow",
          onPress: () => navigation.navigate("Confidentialite"),
        },
        {
          icon: "lock-closed-outline",
          label: "Changer le mot de passe",
          type: "arrow",
        },
        {
          icon: "finger-print-outline",
          label: "Authentification biométrique",
          type: "arrow",
        },
      ],
    },
    {
      title: "Application",
      items: [
        {
          icon: "trash-outline",
          label: "Vider le cache",
          type: "arrow",
          color: "#e74c3c",
        },
        {
          icon: "log-out-outline",
          label: "Se déconnecter",
          type: "arrow",
          color: "#e74c3c",
          onPress: () => navigation.navigate("Login"),
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Paramètres" />

      <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
        {sections.map((section, sIndex) => (
          <View key={sIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, iIndex) => (
              <TouchableOpacity
                key={iIndex}
                style={[
                  styles.item,
                  iIndex === section.items.length - 1 && { borderBottomWidth: 0 }
                ]}
                onPress={item.onPress}
                activeOpacity={item.type === "arrow" ? 0.7 : 1}
              >
                <View style={styles.iconContainer}>
                  <Ionicons
                    name={item.icon}
                    size={20}
                    color={item.color || "#2DC6A0"}
                  />
                </View>
                <Text style={[
                  styles.itemLabel,
                  item.color && { color: item.color }
                ]}>
                  {item.label}
                </Text>
                {item.type === "switch" && (
                  <Switch
                    value={item.value}
                    onValueChange={item.onChange}
                    trackColor={{ false: "#ddd", true: "#2DC6A0" }}
                    thumbColor="#fff"
                  />
                )}
                {item.type === "arrow" && (
                  <Ionicons name="chevron-forward" size={18} color="#ccc" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}