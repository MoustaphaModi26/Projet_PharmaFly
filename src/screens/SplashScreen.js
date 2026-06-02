import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  runOnJS,
} from "react-native-reanimated";
import styles from "../styles/SplashScreenStyles";

export default function SplashScreen({ onFinish }) {
  const opacity = useSharedValue(0);
  const scale = useSharedValue(0.7);

  useEffect(() => {
    opacity.value = withTiming(1, { duration: 800 });
    scale.value = withSequence(
      withTiming(1.1, { duration: 700 }),
      withTiming(1.0, { duration: 200 })
    );

    const timer = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500 }, () => {
        runOnJS(onFinish)();
      });
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wrapper, animatedStyle]}>

        <View style={styles.logoContainer}>
          {/*<Image
            source={require("src/assets/images/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />*/}
          <Text style={styles.logoPlaceholder}>🚁</Text>
        </View>

        <Text style={styles.appName}>PharmaFly</Text>
        <Text style={styles.tagline}>Livraison express par drone</Text>

      </Animated.View>
    </View>
  );
}