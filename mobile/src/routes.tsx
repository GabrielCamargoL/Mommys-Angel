import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { propsNavigationStack } from "./types/propsStack";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();
const BottomTab = createBottomTabNavigator<propsNavigationStack>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={BottomTabsRoutes} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  );
}

export function BottomTabsRoutes() {
  return (
    <BottomTab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Login" component={Login} />
    </BottomTab.Navigator>

  );
}