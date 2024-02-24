//Header.jsx
import { View,  StyleSheet, Image, Text} from "react-native";
import { colors } from '../global/Colors'
import { LogoImage } from "./Logo";
import { fonts } from '../global/fonts'
import { useFonts } from "expo-font";

function Header ({title}) {
    const [fontsLoaded] = useFonts(fonts);
    return ( 
        <View style={styles.menu}> 
            <View>
                <Image source={LogoImage} style={styles.logo}/>
            </View>
            <View style={styles.tituloconteiner}>
                <Text style={styles.titulo}>{title}</Text>
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
        textAlign: "center",
        color: "black",
        fontSize: 20,
        fontFamily:'FontWeb',
        marginTop:20,
        marginBottom:20
    },
    tituloconteiner:{
        justifyContent:'end',
        alignItems:'end',
        textAlign:'end'
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
        alignItems:'center',
        backgroundColor: colors.header
    }
})