import { View,  StyleSheet, Image, Text, Pressable} from "react-native";
import { colors } from '../global/Colors'
import { LogoImage } from "./Logo";
import { fonts } from '../global/fonts'
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

function Header({ title, isLoginPage }) { // Agrega isLoginPage como una prop
    const [fontsLoaded] = useFonts(fonts);
    const { localId, user } = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const onLogout = async () => {
        dispatch(logout());
        const deletedSession = await deleteSession({ localId });
    };

    return (
        <View style={styles.menu}>
            <View>
                <Image source={LogoImage} style={styles.logo} />
            </View>
            <View style={[styles.tituloconteiner, isLoginPage ? { marginLeft: 0 } : null]}>
                <Text style={styles.titulo}>{title}</Text>
                {user ? (
                    <Pressable style={styles.logoutIcon} onPress={onLogout}>
                        <MaterialIcons name="logout" size={24} color="white" />
                    </Pressable>
                ) : null}
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
    tituloconteiner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
        marginLeft: 120,
    },
    
    logoutIcon: {
        marginLeft: 100,
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
