import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ImageBackground, FlatList, ActivityIndicator, Text } from 'react-native';
import getImageSource from './FuenteImage';
import CategoryItem from './CategoryItem';
import { useGetCategoriesQuery } from '../services/shopService';

function Categories({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const { data, error } = useGetCategoriesQuery();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="larges" color="#0000ff"/>
        <Text>Cargandon...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <ImageBackground source={getImageSource(item)} style={styles.textBackground}>
            <CategoryItem navigation={navigation} category={item} />
          </ImageBackground>
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 30,
    padding: 10,
    alignContent: 'center',
    marginRight: 10,
    width: 400,
  },
  textBackground: {
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  loadingContainer: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Categories;
