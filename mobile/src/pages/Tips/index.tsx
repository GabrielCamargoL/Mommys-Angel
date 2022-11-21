import { useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { propsStack } from "../../types/propsStack";
import { ButtonFeatures, Col, Container, IconFeature, Row, Title } from "./styles";

import CarouselTips from '../../components/CarouselTips';
import { tips } from "../../utils/tips";
import { useEffect, useState } from "react";



export default function Tips() {
  const [themes, setThemes] = useState<any>([]);
  const navigation = useNavigation<propsStack>();
  const Bodychanges = () => <CarouselTips />;

  useEffect(() => {
    separateTips();
  }, [])

  function separateTips() {
    let pivot: any = [];
    for (let [key, value] of Object.entries(tips)) {
      pivot.push(key)
    }
    setThemes(pivot)
  }
  return (
    <Container>
      {themes.map((item: [], index) => {
        return (
          <Row key={index}>
            <Col>
              {item.map((tip: any, index) => {
                return (
                  <ButtonFeatures onPress={() => tip.nav} >
                    <LinearGradient colors={['#FF7A00', '#FFC700', '#FFE458']} style={styles.linearGradient} >
                      <IconFeature source={require('./../../assets/img/contraction.png')} />
                      <Title>{tip.title}</Title>
                    </LinearGradient>
                  </ButtonFeatures>
                )
              })}
            </Col>
          </Row>
        )
      })}
    </Container>
  )
};

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



