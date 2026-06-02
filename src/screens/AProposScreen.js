import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderBack from "../components/HeaderBack";
import styles from "../styles/AProposScreenStyles";

export default function AProposScreen({ navigation }) {
  const infos = [
    { icon: "code-slash-outline", label: "Version", value: "1.0.0" },
    { icon: "person-outline", label: "Développeur", value: "PharmaFly Team" },
    { icon: "mail-outline", label: "Contact", value: "contact@pharmafly.cm" },
    { icon: "globe-outline", label: "Site web", value: "www.pharmafly.cm" },
    { icon: "location-outline", label: "Ville", value: "Maroua, Cameroun" },
  ];

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="À Propos" />

      <ScrollView>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>🚁</Text>
          </View>
          <Text style={styles.appName}>PharmaFly</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notre Mission</Text>
          <Text style={styles.descriptionText}>
            PharmaFly est une application mobile de livraison de médicaments par drone
            à Maroua. Notre mission est de faciliter l'accès aux médicaments pour toute
            la population, surtout la nuit et dans les quartiers éloignés des pharmacies.
          </Text>
        </View>

        {/* Infos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations</Text>
          {infos.map((item, index) => (
            <View
              key={index}
              style={[
                styles.infoRow,
                index === infos.length - 1 && { borderBottomWidth: 0 }
              ]}
            >
              <View style={styles.infoIconContainer}>
                <Ionicons name={item.icon} size={18} color="#2DC6A0" />
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.infoLabel}>{item.label}</Text>
                <Text style={styles.infoValue}>{item.value}</Text>
              </View>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}