import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Home } from "./pages/Home";
import Login from "./pages/Login";
import Contraction from "./pages/Contraction";
import Water from "./pages/Water";
import Heart from "./pages/Heart";
import Medicines from "./pages/Medicines";

import { propsNavigationStack } from "./types/propsStack";
import Gallery from "./pages/Gallery";
import Tips from "./pages/Tips";
import Settings from "./pages/Settings";
import BodyChanges from "./pages/BodyChanges";
import Bag from "./pages/Bag";
import RegisterGestation from "./pages/RegisterGestation";

const Stack = createNativeStackNavigator<propsNavigationStack>();
const BottomTab = createBottomTabNavigator<propsNavigationStack>();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="RegisterGestation" component={RegisterGestation} options={{ headerShown: true, headerTitle: 'Registrar Nova Gestação' }} />
        <Stack.Screen name="Contraction" component={Contraction} />
        <Stack.Screen name="Medicines" component={Medicines} />
        <Stack.Screen name="Heart" component={Heart} />
        <Stack.Screen name="Water" component={Water} />
        <Stack.Screen name="BodyChanges" component={BodyChanges} options={{ headerShown: true, headerTitle: 'Mudanças no corpo' }} />
        <Stack.Screen name="Bag" component={Bag} options={{ headerShown: true, headerTitle: 'A Mala' }} />
        <Stack.Screen name="HomeStack" component={BottomTabsRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function BottomTabsRoutes() {
  return (
    <BottomTab.Navigator initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <MaterialIcons name="home" color={color} size={size} />
            );
          } else if (route.name === 'Settings') {
            return (
              <MaterialIcons name='settings' size={size} color={color} />
            );
          } else if (route.name === 'Gallery') {
            return (
              <MaterialIcons name='photo' size={size} color={color} />
            );
          } else if (route.name === 'Tips') {
            return (
              <MaterialIcons name='lightbulb' size={size} color={color} />
            );
          }
        },
        tabBarInactiveTintColor: '#C9BCCD',
        tabBarActiveTintColor: '#FF2574',
      })}
    >
      <BottomTab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
      <BottomTab.Screen name="Tips" component={Tips} options={{ tabBarLabel: 'Dicas' }} />
      <BottomTab.Screen name="Gallery" component={Gallery} options={{ tabBarLabel: 'Galeria' }} />
      <BottomTab.Screen name="Settings" component={Settings} options={{ tabBarLabel: 'Opções' }} />
    </BottomTab.Navigator>
  );
}