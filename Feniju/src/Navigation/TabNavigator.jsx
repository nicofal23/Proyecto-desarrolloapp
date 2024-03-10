import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { colors } from "../global/Colors";
import { StyleSheet, Text, View } from "react-native";
import { Entypo, AntDesign, FontAwesome, EvilIcons } from "@expo/vector-icons";
import OrdersStack from "./OrdersStack";
import MyProfileStack from "./MyProfileStack";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar, 
      }}
    >
      <Tab.Screen
        name="ShopTab"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <Entypo name="shop" size={30} color={focused ? "black" : "white"} />
                <Text style={{ color: focused ? "black" : "white" }}>Shop</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <AntDesign
                  name="shoppingcart"
                  size={30}
                  color={focused ? "black" : "white"}
                />
                <Text style={{ color: focused ? "black" : "white" }}>Cart</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrdersStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <FontAwesome
                  name="list-ul"
                  size={30}
                  color={focused ? "black" : "white"}
                />
                <Text style={{ color: focused ? "black" : "white" }}>Orders</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyProfileStack"
        component={MyProfileStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={styles.tabContainer}>
                <EvilIcons 
                  name="user"
                  size={30}
                  color={focused ? "black" : "white"}
                />
                <Text style={{ color: focused ? "black" : "white" }}>Mi Perfil</Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
    
  );
};

export default TabNavigator;

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