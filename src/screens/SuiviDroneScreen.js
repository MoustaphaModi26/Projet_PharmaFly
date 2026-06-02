import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Modal,
  Animated,
} from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { Ionicons } from "@expo/vector-icons";
import HeaderBack from "../components/HeaderBack";
import styles from "../styles/SuiviDroneScreenStyles";

// Position pharmacie Annexe (départ drone)
const PHARMACIE_POSITION = {
  latitude: 10.5955,
  longitude: 14.3155,
};

// Simulation commande en cours
const commandeEnCours = {
  id: "CMD-001",
  pharmacie: "Pharmacie Annexe",
  medicaments: ["Paracétamol 500mg x2", "Amoxicilline 250mg x1"],
  total: "3500 FCFA",
};

export default function SuiviDroneScreen({ navigation }) {
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [dronePosition, setDronePosition] = useState(PHARMACIE_POSITION);
  const [progression, setProgression] = useState(0);
  const [tempsRestant, setTempsRestant] = useState(14);
  const [distanceRestante, setDistanceRestante] = useState(2.4);
  const [hasCommande] = useState(true);
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const mapRef = useRef(null);

  // Animation pulsation drone
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.3,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Vérifier localisation au démarrage
  useEffect(() => {
    checkLocation();
  }, []);

  // Simulation déplacement drone
  useEffect(() => {
    if (!locationEnabled || !userLocation) return;

    const interval = setInterval(() => {
      setProgression((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });

      setTempsRestant((prev) => (prev > 0 ? prev - 0.1 : 0));
      setDistanceRestante((prev) => (prev > 0 ? prev - 0.02 : 0));

      // Simuler déplacement drone vers patient
      if (userLocation) {
        setDronePosition((prev) => ({
          latitude: prev.latitude + (userLocation.latitude - PHARMACIE_POSITION.latitude) / 100,
          longitude: prev.longitude + (userLocation.longitude - PHARMACIE_POSITION.longitude) / 100,
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [locationEnabled, userLocation]);

  const checkLocation = async () => {
    const { status } = await Location.getForegroundPermissionsAsync();
    if (status === "granted") {
      activerLocalisation();
    } else {
      setModalVisible(true);
    }
  };

  const activerLocalisation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
        const location = await Location.getCurrentPositionAsync({});
        setUserLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        setLocationEnabled(true);
        setModalVisible(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const etapes = [
    {
      label: "Commande confirmée",
      heure: "14:30",
      done: true,
      color: "#2DC6A0",
    },
    {
      label: "Médicaments préparés",
      heure: "14:45",
      done: progression > 30,
      color: progression > 30 ? "#2DC6A0" : "#ddd",
    },
    {
      label: "Drone en route",
      heure: "14:50",
      done: progression > 60,
      color: progression > 60 ? "#2DC6A0" : "#ddd",
    },
    {
      label: "Livraison arrivée",
      heure: "15:04",
      done: progression >= 100,
      color: progression >= 100 ? "#2DC6A0" : "#ddd",
    },
  ];

  // Pas de commande en cours
  if (!hasCommande) {
    return (
      <View style={styles.container}>
        <HeaderBack navigation={navigation} title="Suivi Drone" />
        <View style={styles.noCommandeContainer}>
          <Ionicons name="airplane-outline" size={80} color="#ddd" />
          <Text style={styles.noCommandeText}>Aucune commande en cours</Text>
          <Text style={styles.noCommandeSubText}>
            Passez une commande pour suivre votre drone en temps réel
          </Text>
          <TouchableOpacity
            style={styles.commanderBtn}
            onPress={() => navigation.navigate("Médicaments")}
          >
            <Text style={styles.commanderBtnText}>Commander maintenant</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Suivi Drone" />

      {/* Carte */}
      {locationEnabled && userLocation ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: (PHARMACIE_POSITION.latitude + userLocation.latitude) / 2,
            longitude: (PHARMACIE_POSITION.longitude + userLocation.longitude) / 2,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {/* Marker Pharmacie */}
          <Marker
            coordinate={PHARMACIE_POSITION}
            title="Pharmacie Annexe"
            description="Point de départ"
          >
            <View style={{
              backgroundColor: "#2DC6A0",
              padding: 8,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#fff",
            }}>
              <Ionicons name="storefront-outline" size={16} color="#fff" />
            </View>
          </Marker>

          {/* Marker Patient */}
          <Marker
            coordinate={userLocation}
            title="Votre position"
            description="Point de livraison"
          >
            <View style={{
              backgroundColor: "#3498db",
              padding: 8,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#fff",
            }}>
              <Ionicons name="home-outline" size={16} color="#fff" />
            </View>
          </Marker>

          {/* Marker Drone */}
          <Marker
            coordinate={dronePosition}
            title="Drone"
            description="En route"
          >
            <Animated.View style={{
              transform: [{ scale: pulseAnim }],
              backgroundColor: "#f39c12",
              padding: 8,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: "#fff",
            }}>
              <Ionicons name="airplane-outline" size={16} color="#fff" />
            </Animated.View>
          </Marker>

          {/* Ligne trajet */}
          <Polyline
            coordinates={[PHARMACIE_POSITION, dronePosition, userLocation]}
            strokeColor="#2DC6A0"
            strokeWidth={3}
            lineDashPattern={[5, 5]}
          />
        </MapView>
      ) : (
        <View style={[styles.map, {
          backgroundColor: "#e8f5e9",
          alignItems: "center",
          justifyContent: "center",
        }]}>
          <Ionicons name="map-outline" size={60} color="#2DC6A0" />
          <Text style={{ color: "#2DC6A0", marginTop: 8, fontWeight: "600" }}>
            Activez la localisation
          </Text>
        </View>
      )}

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>

        {/* Carte Info */}
        <View style={styles.infoCard}>

          {/* Statut */}
          <View style={styles.statusRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>
              {progression >= 100 ? "Livraison terminée !" : "Drone en route 🚁"}
            </Text>
          </View>

          <Text style={styles.commandeId}>#{commandeEnCours.id}</Text>
          <Text style={styles.pharmacieNom}>
            📍 {commandeEnCours.pharmacie}
          </Text>

          {/* Stats */}
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>
                {Math.max(0, tempsRestant).toFixed(0)} min
              </Text>
              <Text style={styles.statLabel}>Temps{"\n"}restant</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>
                {Math.max(0, distanceRestante).toFixed(1)} km
              </Text>
              <Text style={styles.statLabel}>Distance{"\n"}restante</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statValue}>{Math.round(progression)}%</Text>
              <Text style={styles.statLabel}>Progression{"\n"}livraison</Text>
            </View>
          </View>

          {/* Barre progression */}
          <View style={styles.progressContainer}>
            <View style={styles.progressLabel}>
              <Text style={styles.progressLabelText}>Pharmacie</Text>
              <Text style={styles.progressLabelText}>Chez vous</Text>
            </View>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progression}%` }]} />
            </View>
          </View>

          {/* Étapes */}
          {etapes.map((etape, index) => (
            <View key={index} style={styles.etapeRow}>
              <View style={[styles.etapeDot, { backgroundColor: etape.color }]} />
              <Text style={styles.etapeText}>{etape.label}</Text>
              <Text style={styles.etapeHeure}>{etape.heure}</Text>
            </View>
          ))}

        </View>

      </ScrollView>

      {/* Modal Localisation */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.modalIconContainer}>
              <Ionicons name="location-outline" size={36} color="#2DC6A0" />
            </View>
            <Text style={styles.modalTitle}>
              Localisation requise
            </Text>
            <Text style={styles.modalText}>
              Pour suivre votre drone en temps réel, vous devez activer votre localisation.
              Cela nous permet de vous montrer la position exacte du drone sur la carte.
            </Text>
            <TouchableOpacity
              style={styles.modalActiverBtn}
              onPress={activerLocalisation}
              activeOpacity={0.85}
            >
              <Text style={styles.modalActiverBtnText}>
                Activer la localisation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalAnnulerBtn}
              onPress={() => {
                setModalVisible(false);
                navigation.goBack();
              }}
            >
              <Text style={styles.modalAnnulerBtnText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>
  );
}