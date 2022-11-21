// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { Alert, Text } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { propsStack } from "../../types/propsStack";
import { ButtonFeatures, Container } from "./styles";

export default function Settings() {
  const navigation = useNavigation<propsStack>();

  async function logout() {
    try {
      await AsyncStorage.setItem('@MommysAngel:teste', JSON.stringify('kkk'));
      await AsyncStorage.removeItem('@MommysAngel:teste');
      return navigation.navigate('Login')
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <Container>
      <ButtonFeatures onPress={() => logout()}>
        <MaterialIcons name='logout' color='red' size={30} />
        <Text>Sair</Text>
      </ButtonFeatures>
    </Container>
  )
}