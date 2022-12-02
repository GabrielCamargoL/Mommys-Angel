import { NativeStackNavigationProp } from "@react-navigation/native-stack"

interface IProps {
  question: string
  answer: string
}

export type propsNavigationStack = {
  Login: undefined,
  RegisterGestation: undefined
  Home: undefined,
  HomeStack: undefined,
  Tips: undefined,
  Settings: undefined,
  Gallery: undefined,
  Contraction: undefined,
  Water: undefined,
  Medicines: undefined,
  RegisterAccount: undefined,
  Heart: undefined,
  BodyChanges: undefined,
  Questions: any,
  Bag: undefined,
};

export type propsStack = NativeStackNavigationProp<propsNavigationStack>;