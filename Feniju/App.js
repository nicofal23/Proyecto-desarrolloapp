import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import Navigator from "./src/Navigation/Navigator";
import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }
  return (
      <Navigator/>
  );
}




