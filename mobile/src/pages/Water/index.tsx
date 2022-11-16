import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { propsStack } from "../../types/propsStack";
import { Container } from "./styles";

export default function Water() {
  const navigation = useNavigation<propsStack>();

  return (
    <>
      <Container>
        <Text>Água</Text>
      </Container>
    </>
  )
}