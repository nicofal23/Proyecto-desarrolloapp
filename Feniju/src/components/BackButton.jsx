import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.titulo}>INICIO</Text>
    </Pressable>
  );
};


export default BackButton