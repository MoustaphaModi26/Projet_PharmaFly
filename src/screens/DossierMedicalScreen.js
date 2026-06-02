import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderBack from "../components/HeaderBack";
import styles from "../styles/DossierMedicalScreenStyles";

export default function DossierMedicalScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const [dossier, setDossier] = useState({
    groupeSanguin: "O+",
    poids: "70 kg",
    taille: "175 cm",
    allergies: ["Pénicilline", "Aspirine"],
    maladies: ["Diabète type 2", "Hypertension"],
    medicaments: ["Metformine 500mg", "Amlodipine 5mg"],
  });

  const [form, setForm] = useState({
    groupeSanguin: dossier.groupeSanguin,
    poids: dossier.poids,
    taille: dossier.taille,
  });

  const handleSave = () => {
    setDossier({ ...dossier, ...form });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Mon Dossier Médical" />

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Informations générales */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations Générales</Text>

          <View style={styles.infoRow}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="water-outline" size={18} color="#2DC6A0" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Groupe sanguin</Text>
              <Text style={styles.infoValue}>{dossier.groupeSanguin}</Text>
            </View>
          </View>

          <View style={styles.infoRow}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="barbell-outline" size={18} color="#2DC6A0" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Poids</Text>
              <Text style={styles.infoValue}>{dossier.poids}</Text>
            </View>
          </View>

          <View style={[styles.infoRow, { borderBottomWidth: 0 }]}>
            <View style={styles.infoIconContainer}>
              <Ionicons name="body-outline" size={18} color="#2DC6A0" />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.infoLabel}>Taille</Text>
              <Text style={styles.infoValue}>{dossier.taille}</Text>
            </View>
          </View>
        </View>

        {/* Allergies */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Allergies</Text>
          <View style={styles.tagContainer}>
            {dossier.allergies.map((item, index) => (
              <View key={index} style={[styles.tag, styles.tagDanger]}>
                <Text style={[styles.tagText, styles.tagTextDanger]}>{item}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.addTagBtn}>
              <Text style={styles.addTagText}>+ Ajouter</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Maladies chroniques */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Maladies Chroniques</Text>
          <View style={styles.tagContainer}>
            {dossier.maladies.map((item, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.addTagBtn}>
              <Text style={styles.addTagText}>+ Ajouter</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Médicaments habituels */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Médicaments Habituels</Text>
          <View style={styles.tagContainer}>
            {dossier.medicaments.map((item, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{item}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.addTagBtn}>
              <Text style={styles.addTagText}>+ Ajouter</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bouton Modifier */}
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            setForm({
              groupeSanguin: dossier.groupeSanguin,
              poids: dossier.poids,
              taille: dossier.taille,
            });
            setModalVisible(true);
          }}
          activeOpacity={0.85}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
          <Text style={styles.editBtnText}>Modifier le dossier</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Modal Modification */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.modalOverlay}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>Modifier le dossier</Text>

              {/* Groupe sanguin */}
              <View style={[
                styles.modalInputWrapper,
                focusedInput === "groupeSanguin" && styles.modalInputFocused
              ]}>
                <Ionicons name="water-outline" size={20} color={focusedInput === "groupeSanguin" ? "#2DC6A0" : "#aaa"} />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Groupe sanguin (ex: O+)"
                  placeholderTextColor="#aaa"
                  value={form.groupeSanguin}
                  onChangeText={(text) => setForm({ ...form, groupeSanguin: text })}
                  onFocus={() => setFocusedInput("groupeSanguin")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              {/* Poids */}
              <View style={[
                styles.modalInputWrapper,
                focusedInput === "poids" && styles.modalInputFocused
              ]}>
                <Ionicons name="barbell-outline" size={20} color={focusedInput === "poids" ? "#2DC6A0" : "#aaa"} />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Poids (ex: 70 kg)"
                  placeholderTextColor="#aaa"
                  value={form.poids}
                  onChangeText={(text) => setForm({ ...form, poids: text })}
                  onFocus={() => setFocusedInput("poids")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              {/* Taille */}
              <View style={[
                styles.modalInputWrapper,
                focusedInput === "taille" && styles.modalInputFocused
              ]}>
                <Ionicons name="body-outline" size={20} color={focusedInput === "taille" ? "#2DC6A0" : "#aaa"} />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Taille (ex: 175 cm)"
                  placeholderTextColor="#aaa"
                  value={form.taille}
                  onChangeText={(text) => setForm({ ...form, taille: text })}
                  onFocus={() => setFocusedInput("taille")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              {/* Bouton Sauvegarder */}
              <TouchableOpacity
                style={styles.modalSaveBtn}
                onPress={handleSave}
                activeOpacity={0.85}
              >
                <Text style={styles.modalSaveBtnText}>Sauvegarder</Text>
              </TouchableOpacity>

              {/* Bouton Annuler */}
              <TouchableOpacity
                style={styles.modalCancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCancelBtnText}>Annuler</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>

    </View>
  );
}