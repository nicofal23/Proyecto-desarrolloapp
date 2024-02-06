import { View, Text, StyleSheet, Image} from "react-native";
import {colors} from '../global/Colors'
import {LogoImage,Carrito}  from "./Logo";

function Header ({title = "INICIO"}) {
    return (
        <View style={styles.container}>
            <View>
                <Image source={LogoImage} style={styles.ovalo}/>
            </View>
            <Text style={styles.titulo}>{title}</Text>
            <View>
                <Image source={Carrito} style={styles.logo}/>
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
        backgroundColor:colors.header
      },
    titulo:{
        justifyContent: 'center',
        color: colors.font,
        fontSize:40,
        fontWeight: 'bold'
    },
    logo: {
        width:50,
        height:50,
    },
    ovalo: {
        width:90,
        height:60
    }
})