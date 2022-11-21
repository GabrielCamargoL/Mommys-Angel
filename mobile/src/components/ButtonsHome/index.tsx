import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { propsStack } from "../../types/propsStack";
import { ButtonFeatures, Col, Container, IconFeature, Row, Title } from "./styles";

export function ButtonsHome() {
  const navigation = useNavigation<propsStack>();

  return (
    <>
      <Container>
        <Row>
          <Col>
            <ButtonFeatures onPress={() => navigation.navigate('Contraction')} >
              <LinearGradient colors={['#FF7A00', '#FFC700', '#FFE458']} style={styles.linearGradient} >
                <IconFeature source={require('./../../assets/img/contraction.png')} />
                <Title>Contrações</Title>
              </LinearGradient>
            </ButtonFeatures>
          </Col>

          <Col>
            <ButtonFeatures onPress={() => navigation.navigate('Medicines')} >
              <LinearGradient colors={['#FF2574', '#FF53B0', '#FD8DFF']} style={styles.linearGradient} >
                <IconFeature source={require('./../../assets/img/Flat.png')} />
                <Title>Remédios</Title>
              </LinearGradient>
            </ButtonFeatures>
          </Col>
        </Row>

        <Row>
          <Col>
            <ButtonFeatures onPress={() => navigation.navigate('Heart')} >
              <LinearGradient colors={['#FF0000', '#FF7A35', '#FF5555']} style={styles.linearGradient} >
                <IconFeature source={require('./../../assets/img/Heart.png')} />
                <Title>Coração</Title>
              </LinearGradient>
            </ButtonFeatures>
          </Col>

          <Col>
            <ButtonFeatures onPress={() => navigation.navigate('Water')} >
              <LinearGradient colors={['#5558FF', '#3382FF', '#00C0FF']} style={styles.linearGradient} >
                <IconFeature source={require('./../../assets/img/Union.png')} />
                <Title>Água</Title>
              </LinearGradient>
            </ButtonFeatures>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linearGradient: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    padding: 20,
    borderRadius: 16,
    alignSelf: "stretch"
  },
})



