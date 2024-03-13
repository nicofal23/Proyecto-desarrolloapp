import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import MapPreview from "../components/MapPreview";
import { useDispatch, useSelector } from "react-redux";
import { setUserLocation } from "../features/auth/authSlice";
import { usePostUserLocationMutation } from "../services/shopService";
import { colors } from "../global/Colors";

const LocationSelector = ({ navigation }) => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });
  const [error, setError] = useState(null); 
  const [address, setAddress] = useState(null);
  const [resultMessage, setResultMessage] = useState(""); 
  const { localId } = useSelector((state) => state.authReducer.value);
  const [triggerPostAddress, result] = usePostUserLocationMutation();
  const dispatch = useDispatch();
  const [showBackButton, setShowBackButton] = useState(false); 

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("El permiso para obtener la locación fue denegado");
        return;
      }
      let location = await Location.getCurrentPositionAsync();
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (location.latitude) {
          const url_reverse_geocode = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.latitude},${location.longitude}&key=${googleAPI.mapStatic}`;
          const response = await fetch(url_reverse_geocode);
          const data = await response.json();
          setAddress(data.results[0].formatted_address);
        }
      } catch (err) {}
    })();
  }, [location]);

  const onConfirmAddress = async () => {
    try {
      const locationFormatted = {
        latitude: location.latitude,
        longitude: location.longitude,
        address: address,
      };
      dispatch(setUserLocation(locationFormatted));
      await triggerPostAddress({ localId, location: locationFormatted });
      setResultMessage("La dirección se actualizó correctamente.");
      setShowBackButton(true); 
    } catch (error) {
      setResultMessage("Hubo un error al actualizar la dirección.");
    }
  };

  const onBackToProfile = () => {
    navigation.navigate("My Profile"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi dirección</Text>
      {location.latitude ? (
        <View style={styles.noLocationContainer}>
          <Text style={styles.coordinates}>
            Latitud: {location.latitude}, Longitud: {location.longitude}
          </Text>
          <Text style={styles.address}>{address}</Text>
          <MapPreview location={location} />
          {showBackButton ? (
            <Pressable style={styles.button} onPress={onBackToProfile}>
              <Text style={styles.buttonText}>Volver a mi perfil</Text>
            </Pressable>
          ) : (
            <Pressable style={styles.button} onPress={onConfirmAddress}>
              <Text style={styles.buttonText}>Confirmar Dirección</Text>
            </Pressable>
          )}
          {resultMessage ? <Text style={styles.resultMessage}>{resultMessage}</Text> : null}
        </View>
      ) : (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 130,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primary,
  },
  noLocationContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  coordinates: {
    fontSize: 16,
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 10,
    color: 'blue'
  },
  button: {
    width: "80%",
    elevation: 8,
    backgroundColor: 'blue',
    borderRadius: 10,
    padding: 14,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  resultMessage: {
    fontSize: 16,
    color: "green",
    marginTop: 10,
  }, 
  errorText: {
    fontSize: 16,
    color: "red",
  },
});
