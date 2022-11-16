import { NativeStackNavigationProp } from "@react-navigation/native-stack"

export type propsNavigationStack = {
  Login: undefined,
  Home: undefined,
  Tips: undefined,
  Settings: undefined,
  Gallery: undefined,
  Contraction: undefined,
  Water: undefined,
  Medicines: undefined,
  RegisterAccount: undefined,
  Heart: undefined
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;