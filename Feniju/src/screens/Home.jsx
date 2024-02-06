import {View, StyleSheet, StatusBar } from "react-native"
import  Header  from "../components/Header"  
import Categories from "../components/Categories"

function Home () {
  return(
    <View style={styles.body}>
      <StatusBar />
      <Header/>
      <Categories/>
    </View>
  );
}


export default Home;

const styles = StyleSheet.create ({
 body:{
  backgroundColor: 'rgb(16 16 143)'
 }

})