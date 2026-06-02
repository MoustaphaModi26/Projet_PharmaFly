import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/TabNavigatorStyles";
import HomeScreen from "../screens/HomeScreen";
import MedicamentsScreen from "../screens/MedicamentsScreen";
import PanierScreen from "../screens/PanierScreen";

const Tab = createBottomTabNavigator();

const tabs = [
  { iconActive: "home", iconInactive: "home-outline", label: "Accueil" },
  { iconActive: "medkit", iconInactive: "medkit-outline", label: "Médicaments" },
  { iconActive: "cart", iconInactive: "cart-outline", label: "Panier" },
];

function CustomTabBar({ state, navigation }) {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={index}
              style={styles.tabItem}
              onPress={() => navigation.navigate(route.name)}
              activeOpacity={0.8}
            >
              {/* Indicateur en haut */}
              {isFocused && (
                <View style={styles.activeIndicatorWrapper}>
                  <View style={styles.activeIndicator} />
                </View>
              )}

              {/* Icône */}
              <View style={[
                styles.iconWrapper,
                isFocused && styles.iconWrapperActive
              ]}>
                <Ionicons
                  name={isFocused ? tabs[index].iconActive : tabs[index].iconInactive}
                  size={24}
                  color={isFocused ? "#fff" : "#aaa"}
                />
              </View>

              {/* Label */}
              <Text style={[
                styles.tabLabel,
                isFocused && styles.tabLabelActive
              ]}>
                {tabs[index].label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

export default function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Médicaments" component={MedicamentsScreen} />
      <Tab.Screen name="Panier" component={PanierScreen} />
    </Tab.Navigator>
  );
}