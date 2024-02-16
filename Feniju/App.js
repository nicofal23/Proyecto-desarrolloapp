import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import Navigator from "./src/Navigation/Navigator";
import { LinearGradient } from 'expo-linear-gradient';
import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={{ flex: 1 }}
    >
      <Navigator />
    </LinearGradient>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    alignItems: "center",
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});
