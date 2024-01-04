import "react-native-gesture-handler";
import * as React from "react";
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

const Stack = createStackNavigator();

const App = () => {
  return (
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
  );
};

export default App;
