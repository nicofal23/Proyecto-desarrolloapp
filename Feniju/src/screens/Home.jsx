//home.jsx
import {View, StyleSheet, StatusBar } from "react-native"
import  Header  from "../components/Header"  
import Categories from "../components/Categories"



function Home ({setCategorySelected}) {
  return(
    <View style={styles.body}>
      <StatusBar />
      <Categories setCategorySelected={setCategorySelected}/>
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