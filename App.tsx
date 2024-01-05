import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./src/screens/HomeScreen";
import ScheduleActivityScreen from "./src/screens/ScheduleActivityScreen";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { AppRoutes } from "./src/utils/constants/routes";
import { Provider } from "react-redux";
import { store } from "./src/store";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

const Stack = createStackNavigator();

// * Keep the splash screen until fonts are loaded
SplashScreen.preventAutoHideAsync();

const App = () => {
  const [fontsLoaded] = useFonts({
    "Rift Soft": require("./assets/fonts/Rift-Soft-Regular.otf"),
    "Europa Regular": require("./assets/fonts/Europa-Regular.ttf"),
    "Europa Light": require("./assets/fonts/Europa-Light.ttf"),
    "Europa Bold": require("./assets/fonts/Europa-Bold.ttf"),
  });

  // * Hide the splash screen when fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded ? (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        >
          <Stack.Screen name={AppRoutes.HOME} component={HomeScreen} />
          <Stack.Screen
            name={AppRoutes.SCHEDULE_ACTIVITY}
            component={ScheduleActivityScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  ) : null;
};

export default App;
