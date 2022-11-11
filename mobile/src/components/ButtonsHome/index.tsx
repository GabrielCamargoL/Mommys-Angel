import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { propsStack } from "../../types/propsStack";
import { ButtonFeatures, Col, IconFeature, Row } from "./styles";

export function ButtonsHome() {
  const navigation = useNavigation<propsStack>();
  return (
    <>
      <Row>
        <Col>
          <ButtonFeatures backgroundColor='#000' onPress={() => { }} >
            <IconFeature source={require('./../../assets/img/Union.png')} />
          </ButtonFeatures>
          <Text>Contrações</Text>
        </Col>

        <Col>
          <ButtonFeatures backgroundColor='#FF7A35' onPress={() => { }} >
            <IconFeature source={require('./../../assets/img/Flat.png')} />
          </ButtonFeatures>
          <Text>Remédios</Text>
        </Col>

        <Col>
          <ButtonFeatures backgroundColor='#FD313D' onPress={() => { }} >
            <IconFeature resizeMode='center' source={require('./../../assets/img/Heart.png')} />
          </ButtonFeatures>
          <Text>Coração</Text>
        </Col>

        <Col>
          <ButtonFeatures backgroundColor='#5558FF' onPress={() => { }} >
            <IconFeature source={require('./../../assets/img/Union.png')} />
          </ButtonFeatures>
          <Text>Água</Text>
        </Col>
      </Row>
    </>
  )
}


