// home.jsx
import { View, StyleSheet, StatusBar } from "react-native";
import Categories from "../components/Categories";

function Home({ navigation }) {
  return (
    <View style={styles.body}>
      <StatusBar />
      <Categories navigation={navigation} /> 
    </View>
  );
}

export default Home;

const styles = StyleSheet.create ({
 
 ovalo: {
  width:90,
  height:60
},
contenedorImage: {
  alignItems:'center',
  paddingTop:20
}
}) 