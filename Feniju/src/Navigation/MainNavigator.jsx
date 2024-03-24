import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import TabNavigator from "./TabNavigator";
import AuthStack from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileImageQuery, useGetUserLocationQuery } from "../services/shopService";
import { setProfileImage, setUserLocation,setUser } from "../features/auth/authSlice";
import { fetchSession } from "../db";
import StyledText from "../styledComponents/StyledText";

const MainNavigator = () => {
  const {user, localId} = useSelector(state => state.authReducer.value)
  const {data, error, isLoading} = useGetProfileImageQuery(localId);
  const {data: location } = useGetUserLocationQuery(localId);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        if (session?.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();

  }, []);

  useEffect(()=> {
    if(data) {
      dispatch(setProfileImage(data.image))
    }
    if(location) {
      dispatch(setUserLocation(location))
    }
  }, [data, location])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <StyledText errorColor>Error al cargar</StyledText>
      </View>
    );
  }

  return (
    <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

