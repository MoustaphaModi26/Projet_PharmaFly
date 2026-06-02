import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import HeaderBack from "../components/HeaderBack";
import styles from "../styles/OrdonnancesScreenStyles";

export default function OrdonnancesScreen({ navigation }) {
  const [ordonnances, setOrdonnances] = useState([
    {
      id: 1,
      nom: "Ordonnance Dr. Moussa",
      date: "15 Mai 2026",
      type: "photo",
    },
    {
      id: 2,
      nom: "Ordonnance Diabète",
      date: "02 Avril 2026",
      type: "pdf",
    },
  ]);

  const pickImage = async () => {
    try {
      const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permission.granted) {
        Alert.alert("Permission refusée", "Veuillez autoriser l'accès à la galerie.");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const newOrdonnance = {
          id: ordonnances.length + 1,
          nom: `Ordonnance ${ordonnances.length + 1}`,
          date: new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          type: "photo",
          uri: result.assets[0].uri,
        };
        setOrdonnances([newOrdonnance, ...ordonnances]);
        Alert.alert("Succès", "Ordonnance ajoutée !");
      }
    } catch (error) {
      Alert.alert("Erreur", "Impossible d'accéder à la galerie.");
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
        copyToCacheDirectory: true,
      });

      if (!result.canceled) {
        const newOrdonnance = {
          id: ordonnances.length + 1,
          nom: result.assets[0].name || `Ordonnance ${ordonnances.length + 1}`,
          date: new Date().toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          type: "pdf",
          uri: result.assets[0].uri,
        };
        setOrdonnances([newOrdonnance, ...ordonnances]);
        Alert.alert("Succès", "Ordonnance PDF ajoutée !");
      }
    } catch (error) {
      Alert.alert("Erreur", "Impossible d'accéder aux fichiers.");
    }
  };

  const deleteOrdonnance = (id) => {
    Alert.alert(
      "Supprimer",
      "Voulez-vous supprimer cette ordonnance ?",
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => setOrdonnances(ordonnances.filter((o) => o.id !== id)),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Mes Ordonnances" />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Boutons Upload */}
        <View style={styles.uploadSection}>

          {/* Upload Photo */}
          <TouchableOpacity
            style={styles.uploadBtn}
            onPress={pickImage}
            activeOpacity={0.8}
          >
            <View style={styles.uploadIconContainer}>
              <Ionicons name="camera-outline" size={24} color="#2DC6A0" />
            </View>
            <Text style={styles.uploadBtnText}>Prendre une{"\n"}photo</Text>
          </TouchableOpacity>

          {/* Upload depuis galerie */}
          <TouchableOpacity
            style={styles.uploadBtn}
            onPress={pickImage}
            activeOpacity={0.8}
          >
            <View style={styles.uploadIconContainer}>
              <Ionicons name="image-outline" size={24} color="#2DC6A0" />
            </View>
            <Text style={styles.uploadBtnText}>Depuis la{"\n"}galerie</Text>
          </TouchableOpacity>

          {/* Upload PDF */}
          <TouchableOpacity
            style={styles.uploadBtn}
            onPress={pickDocument}
            activeOpacity={0.8}
          >
            <View style={styles.uploadIconContainer}>
              <Ionicons name="document-outline" size={24} color="#2DC6A0" />
            </View>
            <Text style={styles.uploadBtnText}>Importer{"\n"}un PDF</Text>
          </TouchableOpacity>

        </View>

        {/* Liste Ordonnances */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Mes Ordonnances ({ordonnances.length})
          </Text>

          {ordonnances.length === 0 ? (
            <View style={styles.emptyContainer}>
              <Ionicons name="document-text-outline" size={48} color="#ddd" />
              <Text style={styles.emptyText}>Aucune ordonnance</Text>
            </View>
          ) : (
            ordonnances.map((item, index) => (
              <View
                key={item.id}
                style={[
                  styles.ordonnanceItem,
                  index === ordonnances.length - 1 && { borderBottomWidth: 0 }
                ]}
              >
                <View style={[
                  styles.ordonnanceIconContainer,
                  {
                    backgroundColor: item.type === "photo"
                      ? "rgba(45,198,160,0.1)"
                      : "rgba(231,76,60,0.1)"
                  }
                ]}>
                  <Ionicons
                    name={item.type === "photo" ? "image-outline" : "document-outline"}
                    size={22}
                    color={item.type === "photo" ? "#2DC6A0" : "#e74c3c"}
                  />
                </View>

                <View style={styles.ordonnanceInfo}>
                  <Text style={styles.ordonnanceNom}>{item.nom}</Text>
                  <Text style={styles.ordonnanceDate}>{item.date}</Text>
                </View>

                <Text style={[
                  styles.ordonnanceType,
                  {
                    backgroundColor: item.type === "photo"
                      ? "rgba(45,198,160,0.1)"
                      : "rgba(231,76,60,0.1)",
                    color: item.type === "photo" ? "#2DC6A0" : "#e74c3c",
                  }
                ]}>
                  {item.type === "photo" ? "PHOTO" : "PDF"}
                </Text>

                <TouchableOpacity
                  onPress={() => deleteOrdonnance(item.id)}
                  style={{ marginLeft: 10 }}
                >
                  <Ionicons name="trash-outline" size={20} color="#e74c3c" />
                </TouchableOpacity>

              </View>
            ))
          )}
        </View>

      </ScrollView>
    </View>
  );
}