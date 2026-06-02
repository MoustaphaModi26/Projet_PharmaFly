import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/RegisterScreenStyles";
import { validateRegisterForm } from "../utils/Validation";
import { register } from "../services/authService";

export default function RegisterScreen({ navigation }) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    const validationErrors = validateRegisterForm(
      nom, prenom, email, telephone, password, confirmPassword
    );
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      setLoading(true);
      await register(nom, prenom, email, telephone, password);
      navigation.navigate("Login");
    } catch (error) {
      setErrors({ global: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>

      {/* Header teal */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoPlaceholder}>🚁</Text>
        </View>
        <Text style={styles.appName}>PharmaFly</Text>
      </View>

      {/* Carte blanche */}
      <View style={styles.card}>
        <Text style={styles.title}>Créer un compte</Text>

        <ScrollView showsVerticalScrollIndicator={false}>

          {/* Nom */}
          <View style={[
            styles.inputWrapper,
            focusedInput === "nom" && styles.inputFocused,
            errors.nom && { borderColor: "#e74c3c" }
          ]}>
            <Ionicons
              name="person-outline"
              size={20}
              color={focusedInput === "nom" ? "#2DC6A0" : "#aaa"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Nom"
              placeholderTextColor="#aaa"
              value={nom}
              onChangeText={(text) => {
                setNom(text);
                setErrors({ ...errors, nom: null });
              }}
              onFocus={() => setFocusedInput("nom")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>
          {errors.nom && <Text style={styles.errorText}>{errors.nom}</Text>}

          {/* Prénom */}
          <View style={[
            styles.inputWrapper,
            focusedInput === "prenom" && styles.inputFocused,
            errors.prenom && { borderColor: "#e74c3c" }
          ]}>
            <Ionicons
              name="person-outline"
              size={20}
              color={focusedInput === "prenom" ? "#2DC6A0" : "#aaa"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              placeholderTextColor="#aaa"
              value={prenom}
              onChangeText={(text) => {
                setPrenom(text);
                setErrors({ ...errors, prenom: null });
              }}
              onFocus={() => setFocusedInput("prenom")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>
          {errors.prenom && <Text style={styles.errorText}>{errors.prenom}</Text>}

          {/* Email */}
          <View style={[
            styles.inputWrapper,
            focusedInput === "email" && styles.inputFocused,
            errors.email && { borderColor: "#e74c3c" }
          ]}>
            <Ionicons
              name="mail-outline"
              size={20}
              color={focusedInput === "email" ? "#2DC6A0" : "#aaa"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#aaa"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                setErrors({ ...errors, email: null });
              }}
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

          {/* Téléphone */}
          <View style={[
            styles.inputWrapper,
            focusedInput === "telephone" && styles.inputFocused,
            errors.telephone && { borderColor: "#e74c3c" }
          ]}>
            <Ionicons
              name="call-outline"
              size={20}
              color={focusedInput === "telephone" ? "#2DC6A0" : "#aaa"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Téléphone"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={telephone}
              onChangeText={(text) => {
                setTelephone(text);
                setErrors({ ...errors, telephone: null });
              }}
              onFocus={() => setFocusedInput("telephone")}
              onBlur={() => setFocusedInput(null)}
            />
          </View>
          {errors.telephone && <Text style={styles.errorText}>{errors.telephone}</Text>}

          {/* Mot de passe */}
          <View style={[
            styles.inputWrapper,
            focusedInput === "password" && styles.inputFocused,
            errors.password && { borderColor: "#e74c3c" }
          ]}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={focusedInput === "password" ? "#2DC6A0" : "#aaa"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              placeholderTextColor="#aaa"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                setErrors({ ...errors, password: null });
              }}
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput(null)}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Ionicons
                name={showPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

          {/* Confirmer mot de passe */}
          <View style={[
            styles.inputWrapper,
            focusedInput === "confirmPassword" && styles.inputFocused,
            errors.confirmPassword && { borderColor: "#e74c3c" }
          ]}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color={focusedInput === "confirmPassword" ? "#2DC6A0" : "#aaa"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              placeholderTextColor="#aaa"
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                setErrors({ ...errors, confirmPassword: null });
              }}
              onFocus={() => setFocusedInput("confirmPassword")}
              onBlur={() => setFocusedInput(null)}
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Ionicons
                name={showConfirmPassword ? "eye-off-outline" : "eye-outline"}
                size={20}
                color="#aaa"
              />
            </TouchableOpacity>
          </View>
          {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword}</Text>}

          {/* Erreur globale */}
          {errors.global && (
            <Text style={[styles.errorText, { textAlign: "center", marginBottom: 10 }]}>
              {errors.global}
            </Text>
          )}

          {/* Bouton S'inscrire */}
          <TouchableOpacity
            style={[styles.registerBtn, loading && { opacity: 0.7 }]}
            activeOpacity={0.85}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.registerBtnText}>
              {loading ? "Inscription..." : "S'inscrire"}
            </Text>
          </TouchableOpacity>

          {/* Lien connexion */}
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Déjà un compte ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginLink}>Se connecter</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </View>
  );
}