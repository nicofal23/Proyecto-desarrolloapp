import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import ShopStack from "./ShopStack"
import CartStack from "./CartStack";
import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../global/Colors';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import OrdersStack from "./OrdersStack";


const TabNavigator = ()=> {
    const Tab = createBottomTabNavigator()
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>
                <Tab.Screen name="ShopStack" component={ShopStack} options={{
                    tabBarIcon: ({focused}) =>{
                        return (
                            <View style={styles.tabContainer}>
                                <FontAwesome5 name="shopping-bag" size={32} color={focused ? "blue" : "black"} />
                                <Text style={{color: focused ? "blue" : "black"}}>Compra</Text>
                            </View>
                        )
                    }
                }} />
                <Tab.Screen name="CartStack" component={CartStack} options={{
                    tabBarIcon: ({focused}) =>{
                        return (
                            <View style={styles.tabContainer}>
                                <MaterialCommunityIcons name="cart-variant" size={32} color={focused ? "blue" : "black"} />
                                <Text style={{color: focused ? "blue" : "black"}}>Compra</Text>
                            </View>
                        )
                    }
                }} />
                <Tab.Screen name="OrderTab" component={OrdersStack} options={{
                    tabBarIcon: ({focused}) =>{
                        return (
                            <View style={styles.tabContainer}>
                                <MaterialCommunityIcons name="order-bool-ascending-variant" size={24} color={focused ? "blue" : "black"} />
                                <Text style={{color: focused ? "blue" : "black"}}>Ordenes</Text>
                            </View>
                        )
                    }
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}


export default TabNavigator

const styles = StyleSheet.create ({
    tabBar: {
        backgroundColor : colors.header,
        shadowColor: 'white',
        height:70
    },
    tabContainer: {
        justifyContent:'center',
        alignItems:'center'
    }
})