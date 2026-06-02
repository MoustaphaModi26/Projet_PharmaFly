import 'react-native-gesture-handler';
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Switch,
  ScrollView,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/DrawerStyles";
import TabNavigator from "./TabNavigator";

// Screens
import ProfilScreen from "../screens/ProfilScreen";
import DossierMedicalScreen from "../screens/DossierMedicalScreen";
import OrdonnancesScreen from "../screens/OrdonnancesScreen";
import CommandesScreen from "../screens/CommandesScreen";
import SuiviDroneScreen from "../screens/SuiviDroneScreen";
import HistoriqueScreen from "../screens/HistoriqueScreen";
import FavorisScreen from "../screens/FavorisScreen";
import AdressesScreen from "../screens/AdressesScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import EvaluationsScreen from "../screens/EvaluationsScreen";
import SupportScreen from "../screens/SupportScreen";
import PaiementScreen from "../screens/PaiementScreen";
import ApparenceScreen from "../screens/ApparenceScreen";
import LangueScreen from "../screens/LangueScreen";
import ConfidentialiteScreen from "../screens/ConfidentialiteScreen";
import ParametresScreen from "../screens/ParametresScreen";
import AProposScreen from "../screens/AProposScreen";

const Drawer = createDrawerNavigator();

const menuSections = [
  {
    title: "COMPTE",
    items: [
      { icon: "person-outline", label: "Mon Compte", screen: "Profil" },
      { icon: "medkit-outline", label: "Mon Dossier Médical", screen: "DossierMedical" },
      { icon: "document-text-outline", label: "Mes Ordonnances", screen: "Ordonnances" },
    ],
  },
  {
    title: "ACTIVITÉ",
    items: [
      { icon: "cube-outline", label: "Mes Commandes", screen: "Commandes" },
      { icon: "airplane-outline", label: "Suivi Drone", screen: "SuiviDrone" },
      { icon: "time-outline", label: "Historique", screen: "Historique" },
      { icon: "heart-outline", label: "Favoris", screen: "Favoris" },
      { icon: "location-outline", label: "Mes Adresses", screen: "Adresses" },
    ],
  },
  {
    title: "COMMUNICATION",
    items: [
      { icon: "notifications-outline", label: "Notifications", screen: "Notifications" },
      { icon: "star-outline", label: "Évaluations", screen: "Evaluations" },
      { icon: "headset-outline", label: "Support", screen: "Support" },
    ],
  },
  {
    title: "PAIEMENT",
    items: [
      { icon: "card-outline", label: "Paiement", screen: "Paiement" },
    ],
  },
  {
    title: "GÉNÉRAL",
    items: [
      { icon: "settings-outline", label: "Paramètres", screen: "Parametres" },
      { icon: "information-circle-outline", label: "À Propos", screen: "APropos" },
    ],
  },
];

function CustomDrawerContent({ navigation }) {
  const [localisation, setLocalisation] = React.useState(false);

  return (
    <DrawerContentScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={36} color="#fff" />
        </View>
        <Text style={styles.userName}>Amadou Moussa</Text>
        <Text style={styles.userEmail}>test@test.com</Text>
      </View>

      {/* Menu Sections */}
      <View style={styles.menuSection}>
        {menuSections.map((section, sIndex) => (
          <View key={sIndex}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, iIndex) => (
              <TouchableOpacity
                key={iIndex}
                style={styles.menuItem}
                onPress={() => navigation.navigate(item.screen)}
                activeOpacity={0.7}
              >
                <View style={styles.menuIconContainer}>
                  <Ionicons name={item.icon} size={20} color="#2DC6A0" />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Ionicons name="chevron-forward" size={18} color="#ccc" />
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* Localisation Switch */}
        <View style={styles.switchRow}>
          <View style={styles.menuIconContainer}>
            <Ionicons name="location-outline" size={20} color="#2DC6A0" />
          </View>
          <Text style={styles.menuLabel}>Localisation</Text>
          <Switch
            value={localisation}
            onValueChange={setLocalisation}
            trackColor={{ false: "#ddd", true: "#2DC6A0" }}
            thumbColor="#fff"
          />
        </View>
      </View>

      {/* Déconnexion */}
      <TouchableOpacity
        style={styles.logoutBtn}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Login")}
      >
        <View style={styles.logoutIconContainer}>
          <Ionicons name="log-out-outline" size={20} color="#e74c3c" />
        </View>
        <Text style={styles.logoutText}>Se déconnecter</Text>
      </TouchableOpacity>

    </DrawerContentScrollView>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "left",
        swipeEnabled: true,
        swipeEdgeWidth: 100,
      }}
    >
      <Drawer.Screen name="Main" component={TabNavigator} />
      <Drawer.Screen name="Profil" component={ProfilScreen} />
      <Drawer.Screen name="DossierMedical" component={DossierMedicalScreen} />
      <Drawer.Screen name="Ordonnances" component={OrdonnancesScreen} />
      <Drawer.Screen name="Commandes" component={CommandesScreen} />
      <Drawer.Screen name="SuiviDrone" component={SuiviDroneScreen} />
      <Drawer.Screen name="Historique" component={HistoriqueScreen} />
      <Drawer.Screen name="Favoris" component={FavorisScreen} />
      <Drawer.Screen name="Adresses" component={AdressesScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Evaluations" component={EvaluationsScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
      <Drawer.Screen name="Paiement" component={PaiementScreen} />
      <Drawer.Screen name="Apparence" component={ApparenceScreen} />
      <Drawer.Screen name="Langue" component={LangueScreen} />
      <Drawer.Screen name="Confidentialite" component={ConfidentialiteScreen} />
      <Drawer.Screen name="Parametres" component={ParametresScreen} />
      <Drawer.Screen name="APropos" component={AProposScreen} />
    </Drawer.Navigator>
  );
}