import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { propsStack } from "../../types/propsStack";
import { Container } from "./styles";

export default function Medicines() {
  const navigation = useNavigation<propsStack>();

  return (
    <>
      <Container>
        <Text>Remédios</Text>
      </Container>
    </>
  )
}