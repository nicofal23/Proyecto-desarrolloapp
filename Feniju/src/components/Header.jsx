//Header.jsx
import { View, Text, StyleSheet, Image, Pressable} from "react-native";
import {colors} from '../global/Colors'
import {Carrito}  from "./Logo";
import {LogoImage} from "./Logo";

function Header () {
    return ( 
        <View style={styles.menu}>
            <View>
                <Image source={LogoImage} style={styles.logo}/>
            </View>
            <View style={styles.container}>
                <Pressable>
                    <Text style={styles.titulo}>INICIO</Text>
                </Pressable>
                <Pressable>
                    <Text style={styles.titulo}>PRODUCTOS</Text>
                </Pressable>
                <View>
                    <Image source={Carrito} style={styles.carro}/>
                </View>
            </View>
        </View>
    )
}


export default Header;

const styles =StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        width: '100%',
        height: 70,
        padding:8,
      },
    titulo:{
        justifyContent: 'center',
        color: colors.font,
        fontSize:15,
        fontWeight: 'bold'
    },
    logo: {
        marginTop:15,
        width:160,
        height:50,
    },
    carro:{
        width:40,
        height:40,
    },
    menu: {
        alignItems:'center'
    }
})