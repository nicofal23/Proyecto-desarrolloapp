import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import TabNavigator from "./src/Navigation/TabNavigator";
import { Provider } from "react-redux";
import store from './src/store';
import Toast from 'react-native-toast-message';

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }
  return (
      <Provider store={store}>
        <TabNavigator/>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </Provider>
  );
}




