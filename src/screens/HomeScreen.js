import React, { useState, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styles from "../styles/HomeScreenStyles";
import { pharmacies } from "../data/mockData";

const { width } = Dimensions.get("window");

const FILTRES = [
  { key: "tous", label: `Toutes (${pharmacies.length})` },
  { key: "garde", label: `De garde (${pharmacies.filter(p => p.garde).length})` },
  { key: "ferme", label: `Fermées (${pharmacies.filter(p => !p.garde).length})` },
];

export default function HomeScreen({ navigation }) {
  const [filtre, setFiltre] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrollRef = useRef(null);
  const rotation = useSharedValue(0);

  // Utilisateur fictif
  const user = { nom: "Amadou", prenom: "Moussa", photo: null };
  const initiales = user.nom.charAt(0) + user.prenom.charAt(0);

  const toggleDrawer = () => {
    if (drawerOpen) {
      rotation.value = withTiming(0, { duration: 300 });
      navigation.closeDrawer();
    } else {
      rotation.value = withTiming(1, { duration: 300 });
      navigation.openDrawer();
    }
    setDrawerOpen(!drawerOpen);
  };

  // Sync état si drawer fermé par glissement
  navigation.addListener("drawerClose", () => {
    rotation.value = withTiming(0, { duration: 300 });
    setDrawerOpen(false);
  });

  navigation.addListener("drawerOpen", () => {
    rotation.value = withTiming(1, { duration: 300 });
    setDrawerOpen(true);
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 90}deg` }],
    opacity: withTiming(1, { duration: 300 }),
  }));

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    if (index !== filtre) setFiltre(index);
  };

  const goToPage = (index) => {
    setFiltre(index);
    scrollRef.current?.scrollTo({ x: index * width, animated: true });
  };

  const renderPharmacie = ({ item }) => (
    <TouchableOpacity style={styles.pharmacieCard} activeOpacity={0.8}>
      <View style={[
        styles.pharmacieIconContainer,
        { backgroundColor: item.garde ? "rgba(45,198,160,0.12)" : "rgba(231,76,60,0.1)" }
      ]}>
        <Ionicons
          name="medkit-outline"
          size={22}
          color={item.garde ? "#2DC6A0" : "#e74c3c"}
        />
      </View>

      <View style={styles.pharmacieInfo}>
        <Text style={styles.pharmacieNom}>{item.nom}</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 3 }}>
          <Ionicons name="location-outline" size={13} color="#888" />
          <Text style={styles.pharmacieQuartier}> {item.quartier}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="call-outline" size={13} color="#aaa" />
          <Text style={styles.pharmcieTelephone}> {item.telephone}</Text>
        </View>
      </View>

      <View style={[
        styles.gardeBadge,
        { backgroundColor: item.garde ? "rgba(45,198,160,0.12)" : "rgba(231,76,60,0.1)" }
      ]}>
        <Ionicons
          name={item.garde ? "checkmark-circle" : "close-circle"}
          size={14}
          color={item.garde ? "#2DC6A0" : "#e74c3c"}
        />
        <Text style={[
          styles.gardeBadgeText,
          { color: item.garde ? "#2DC6A0" : "#e74c3c", marginTop: 2 }
        ]}>
          {item.garde ? "De garde" : "Fermée"}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

        {/* Header */}
<View style={styles.header}>
  <TouchableOpacity onPress={() => navigation.openDrawer()}>
    <Ionicons name="menu-outline" size={35} color="#fff" />
  </TouchableOpacity>
  <View style={styles.headerTop}>

  

    {/* Titre centré */}
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.headerTitle}>PharmaFly</Text>
    </View>

    {/* Cloche + Avatar à droite */}
    <View style={styles.headerIcons}>
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.avatarBtn}
        onPress={() => navigation.navigate("Profil")}
      >
        <Text style={styles.avatarText}>{initiales}</Text>
      </TouchableOpacity>
    </View>

  </View>

  {/* Sous-titre */}
  <Text style={styles.headerSubtitle}>
    Pharmacies de garde à Maroua
  </Text>
</View>

      {/* Onglets */}
      <View style={styles.tabRow}>
        {FILTRES.map((f, index) => (
          <TouchableOpacity
            key={f.key}
            style={[styles.tabBtn, filtre === index && styles.tabBtnActive]}
            onPress={() => goToPage(index)}
          >
            <Ionicons
              name={
                index === 0 ? "list-outline" :
                index === 1 ? "checkmark-circle-outline" :
                "close-circle-outline"
              }
              size={14}
              color={filtre === index ? "#fff" : "#555"}
              style={{ marginRight: 4 }}
            />
            <Text style={[styles.tabBtnText, filtre === index && styles.tabBtnTextActive]}>
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Indicateur de page */}
      <View style={styles.indicatorRow}>
        {FILTRES.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              filtre === index && styles.indicatorActive
            ]}
          />
        ))}
      </View>

      {/* Contenu glissant */}
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={8}
        decelerationRate="fast"
        style={{ flex: 1 }}
      >
        {FILTRES.map((f, index) => {
          const data = pharmacies.filter((p) => {
            if (index === 1) return p.garde === true;
            if (index === 2) return p.garde === false;
            return true;
          });

          return (
            <View key={f.key} style={{ width }}>
              <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderPharmacie}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={
                  <Text style={styles.emptyText}>Aucune pharmacie trouvée</Text>
                }
                contentContainerStyle={{ paddingVertical: 12, paddingBottom: 100 }}
              />
            </View>
          );
        })}
      </ScrollView>

    </View>
  );
}