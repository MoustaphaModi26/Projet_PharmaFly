import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/LoginScreenStyles";
import { validateLoginForm } from "../utils/Validation";
import { login } from "../services/authService";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedInput, setFocusedInput] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const validationErrors = validateLoginForm(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      setLoading(true);
      await login(email, password);
      navigation.navigate("Home");
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
        <Text style={styles.tagline}>Livraison express par drone</Text>
      </View>

      {/* Carte blanche */}
      <View style={styles.card}>
        <Text style={styles.title}>Connexion</Text>

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
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? "eye-off-outline" : "eye-outline"}
              size={20}
              color="#aaa"
            />
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        {/* Mot de passe oublié */}
        <TouchableOpacity style={styles.forgotBtn}>
          <Text style={styles.forgotText}>Mot de passe oublié ?</Text>
        </TouchableOpacity>

        {/* Se souvenir de moi */}
        <TouchableOpacity
          style={styles.rememberRow}
          onPress={() => setRememberMe(!rememberMe)}
          activeOpacity={0.7}
        >
          <View style={[
            styles.checkbox,
            rememberMe && styles.checkboxChecked
          ]}>
            {rememberMe && (
              <Ionicons name="checkmark" size={14} color="#fff" />
            )}
          </View>
          <Text style={styles.rememberText}>Se souvenir de moi</Text>
        </TouchableOpacity>

        {/* Erreur globale */}
        {errors.global && (
          <Text style={[styles.errorText, { textAlign: "center", marginBottom: 10 }]}>
            {errors.global}
          </Text>
        )}

        {/* Bouton Connexion */}
        <TouchableOpacity
          style={[styles.loginBtn, loading && { opacity: 0.7 }]}
          activeOpacity={0.85}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginBtnText}>
            {loading ? "Connexion..." : "Se connecter"}
          </Text>
        </TouchableOpacity>

        {/* Bouton Inscription */}
        <TouchableOpacity
          style={styles.registerBtn}
          activeOpacity={0.85}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerBtnText}>Créer un compte</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}