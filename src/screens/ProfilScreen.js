import React, { useState } from "react";
import HeaderBack from "../components/HeaderBack";
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
import styles from "../styles/ProfilScreenStyles";

export default function ProfilScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);
  const [user, setUser] = useState({
    nom: "Amadou",
    prenom: "Moussa",
    email: "test@test.com",
    telephone: "699000001",
    adresse: "Domayo, Maroua",
  });

  const [form, setForm] = useState({ ...user });
  const initiales = user.nom.charAt(0) + user.prenom.charAt(0);

  const handleSave = () => {
    setUser({ ...form });
    setModalVisible(false);
  };

  const infoItems = [
    { icon: "person-outline", label: "Nom complet", value: `${user.nom} ${user.prenom}` },
    { icon: "mail-outline", label: "Email", value: user.email },
    { icon: "call-outline", label: "Téléphone", value: user.telephone },
    { icon: "location-outline", label: "Adresse", value: user.adresse },
  ];

  return (
    <View style={styles.container}>

      {/* Bouton retour */}
      <HeaderBack navigation={navigation} title="Mon Compte" />

      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{initiales}</Text>
            <TouchableOpacity style={styles.editAvatarBtn}>
              <Ionicons name="camera-outline" size={16} color="#2DC6A0" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{user.nom} {user.prenom}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>

        {/* Infos personnelles */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations personnelles</Text>
          {infoItems.map((item, index) => (
            <View
              key={index}
              style={[
                styles.infoRow,
                index === infoItems.length - 1 && { borderBottomWidth: 0 }
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

        {/* Bouton Modifier */}
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => {
            setForm({ ...user });
            setModalVisible(true);
          }}
          activeOpacity={0.85}
        >
          <Ionicons name="create-outline" size={20} color="#fff" />
          <Text style={styles.editBtnText}>Modifier le profil</Text>
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
              <Text style={styles.modalTitle}>Modifier le profil</Text>

              {/* Nom */}
              <View style={[
                styles.modalInputWrapper,
                focusedInput === "nom" && styles.modalInputFocused
              ]}>
                <Ionicons name="person-outline" size={20} color={focusedInput === "nom" ? "#2DC6A0" : "#aaa"} />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Nom"
                  placeholderTextColor="#aaa"
                  value={form.nom}
                  onChangeText={(text) => setForm({ ...form, nom: text })}
                  onFocus={() => setFocusedInput("nom")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              {/* Prénom */}
              <View style={[
                styles.modalInputWrapper,
                focusedInput === "prenom" && styles.modalInputFocused
              ]}>
                <Ionicons name="person-outline" size={20} color={focusedInput === "prenom" ? "#2DC6A0" : "#aaa"} />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Prénom"
                  placeholderTextColor="#aaa"
                  value={form.prenom}
                  onChangeText={(text) => setForm({ ...form, prenom: text })}
                  onFocus={() => setFocusedInput("prenom")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              {/* Téléphone */}
              <View style={[
                styles.modalInputWrapper,
                focusedInput === "telephone" && styles.modalInputFocused
              ]}>
                <Ionicons name="call-outline" size={20} color={focusedInput === "telephone" ? "#2DC6A0" : "#aaa"} />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Téléphone"
                  placeholderTextColor="#aaa"
                  keyboardType="phone-pad"
                  value={form.telephone}
                  onChangeText={(text) => setForm({ ...form, telephone: text })}
                  onFocus={() => setFocusedInput("telephone")}
                  onBlur={() => setFocusedInput(null)}
                />
              </View>

              {/* Adresse */}
              <View style={[
                styles.modalInputWrapper,
                focusedInput === "adresse" && styles.modalInputFocused
              ]}>
                <Ionicons name="location-outline" size={20} color={focusedInput === "adresse" ? "#2DC6A0" : "#aaa"} />
                <TextInput
                  style={styles.modalInput}
                  placeholder="Adresse"
                  placeholderTextColor="#aaa"
                  value={form.adresse}
                  onChangeText={(text) => setForm({ ...form, adresse: text })}
                  onFocus={() => setFocusedInput("adresse")}
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