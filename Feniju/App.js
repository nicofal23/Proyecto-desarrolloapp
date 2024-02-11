import { useState } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import Constants from "expo-constants";
import Home from "./src/screens/Home";
import ItemDetail from "./src/screens/ItemDetail";
import ItemListCategories from "./src/components/ItemListCategories";
import { fonts } from "./src/global/fonts";
import { StatusBar } from "expo-status-bar";
import Header from './src/components/Header'
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  const [categorySelected, setCategorySelected] = useState("");
  const [productDetailId, setProductDetailId] = useState(0);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <Header/>
      <StatusBar style="auto" />
      {productDetailId ? (
        <ItemDetail productDetailId={productDetailId}  />
      ) : categorySelected ? (
        <ItemListCategories
          setCategorySelected={setCategorySelected}
          category={categorySelected}
          setProductDetailId={setProductDetailId}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </LinearGradient>
    </SafeAreaView>
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
