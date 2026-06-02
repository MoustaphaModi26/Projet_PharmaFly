import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderBack from "../components/HeaderBack";
import styles from "../styles/CommandesScreenStyles";

const { width } = Dimensions.get("window");

const statusConfig = {
  en_cours: { label: "En cours", color: "#f39c12", bg: "rgba(243,156,18,0.1)" },
  livree: { label: "Livrée", color: "#2DC6A0", bg: "rgba(45,198,160,0.1)" },
  annulee: { label: "Annulée", color: "#e74c3c", bg: "rgba(231,76,60,0.1)" },
  en_attente: { label: "En attente", color: "#3498db", bg: "rgba(52,152,219,0.1)" },
};

const mockCommandes = [
  {
    id: "CMD-001",
    date: "28 Mai 2026",
    status: "en_cours",
    pharmacie: "Pharmacie Annexe",
    total: "3500 FCFA",
    medicaments: [
      { nom: "Paracétamol 500mg", qte: "x2" },
      { nom: "Amoxicilline 250mg", qte: "x1" },
    ],
  },
  {
    id: "CMD-002",
    date: "20 Mai 2026",
    status: "livree",
    pharmacie: "Pharmacie Domayo",
    total: "5200 FCFA",
    medicaments: [
      { nom: "Artemether 20mg", qte: "x1" },
      { nom: "Metformine 500mg", qte: "x2" },
    ],
  },
  {
    id: "CMD-003",
    date: "10 Mai 2026",
    status: "annulee",
    pharmacie: "Pharmacie Kongola",
    total: "1800 FCFA",
    medicaments: [
      { nom: "Quinine 300mg", qte: "x1" },
    ],
  },
  {
    id: "CMD-004",
    date: "05 Mai 2026",
    status: "en_attente",
    pharmacie: "Pharmacie Pitoare",
    total: "2600 FCFA",
    medicaments: [
      { nom: "Vitamine C 500mg", qte: "x2" },
      { nom: "Zinc 20mg", qte: "x1" },
    ],
  },
];

const filtres = [
  { key: "tous", label: "Toutes" },
  { key: "en_cours", label: "En cours" },
  { key: "livree", label: "Livrées" },
  { key: "annulee", label: "Annulées" },
];

export default function CommandesScreen({ navigation }) {
  const [filtre, setFiltre] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    if (index !== filtre) setFiltre(index);
  };

  const goToPage = (index) => {
    setFiltre(index);
    scrollRef.current?.scrollTo({ x: index * width, animated: true });
  };

  const getCommandes = (index) => {
    return mockCommandes.filter((c) => {
      if (index === 0) return true;
      if (index === 1) return c.status === "en_cours";
      if (index === 2) return c.status === "livree";
      if (index === 3) return c.status === "annulee";
      return true;
    });
  };

  const renderCommande = ({ item }) => {
    const status = statusConfig[item.status];
    return (
      <TouchableOpacity style={styles.commandeCard} activeOpacity={0.8}>

        {/* Header */}
        <View style={styles.commandeHeader}>
          <View>
            <Text style={styles.commandeId}>#{item.id}</Text>
            <Text style={styles.commandeDate}>{item.date}</Text>
          </View>
          <View style={[styles.statusBadge, { backgroundColor: status.bg }]}>
            <Text style={[styles.statusText, { color: status.color }]}>
              {status.label}
            </Text>
          </View>
        </View>

        {/* Médicaments */}
        <View style={styles.commandeBody}>
          {item.medicaments.map((med, index) => (
            <View key={index} style={styles.medicamentRow}>
              <Ionicons name="medkit-outline" size={14} color="#2DC6A0" />
              <Text style={styles.medicamentNom}>{med.nom}</Text>
              <Text style={styles.medicamentQte}>{med.qte}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.commandeFooter}>
          <Text style={styles.commandePharmacieNom}>{item.pharmacie}</Text>
          <Text style={styles.commandeTotal}>{item.total}</Text>
        </View>

      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBack navigation={navigation} title="Mes Commandes" />

      {/* Onglets */}
      <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 14, gap: 8 }}>
        {filtres.map((f, index) => (
          <TouchableOpacity
            key={f.key}
            style={[styles.filterBtn, filtre === index && styles.filterBtnActive]}
            onPress={() => goToPage(index)}
          >
            <Text style={[
              styles.filterBtnText,
              filtre === index && styles.filterBtnTextActive
            ]}>
              {f.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Indicateur */}
      <View style={{ flexDirection: "row", justifyContent: "center", gap: 6, marginBottom: 8 }}>
        {filtres.map((_, index) => (
          <View
            key={index}
            style={{
              width: filtre === index ? 20 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: filtre === index ? "#2DC6A0" : "#ddd",
            }}
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
        {filtres.map((_, index) => (
          <View key={index} style={{ width }}>
            <FlatList
              data={getCommandes(index)}
              keyExtractor={(item) => item.id}
              renderItem={renderCommande}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40 }}
              ListEmptyComponent={
                <View style={styles.emptyContainer}>
                  <Ionicons name="cube-outline" size={48} color="#ddd" />
                  <Text style={styles.emptyText}>Aucune commande trouvée</Text>
                </View>
              }
            />
          </View>
        ))}
      </ScrollView>

    </View>
  );
}