import 'react-native-gesture-handler';
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "./src/screens/SplashScreen";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <StatusBar style="light" />
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <AppNavigator />
      )}
    </>
  );
}