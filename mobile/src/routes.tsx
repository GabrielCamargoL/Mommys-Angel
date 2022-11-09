import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/Home";
import Login from "./pages/Login";
import { propsNavigationStack } from "./types/propsStack";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}