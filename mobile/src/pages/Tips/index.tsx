import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { propsStack } from "../../types/propsStack";
import { ButtonFeatures, CardTips, Col, Container, Icon, Row, Title, ViewIconContainer, ViewIconTitle } from "./styles";
import { tips } from "../../utils/tips";

interface IProps {
  question: string
  answer: string
}


export default function Tips() {
  const navigation = useNavigation<propsStack>();

  return (
    <Container>
      <CardTips>
        <Row>
          <Col>
            <ButtonFeatures onPress={() => navigation.navigate("BodyChanges")} >
              <ViewIconTitle>
                <ViewIconContainer>
                  <Icon source={require('./../../assets/img/tips/body.png')} />
                </ViewIconContainer>
                <Title>Mudanças no corpo</Title>
              </ViewIconTitle>
            </ButtonFeatures>
          </Col>

          <Col>
            <ButtonFeatures onPress={() => navigation.navigate("Bag")} >
              <ViewIconTitle>
                <ViewIconContainer>
                  <Icon source={require('./../../assets/img/tips/bag.png')} />
                </ViewIconContainer>
                <Title>A mala</Title>
              </ViewIconTitle>
            </ButtonFeatures>
          </Col>
        </Row>

        <Row>
          <Col>
            <ButtonFeatures onPress={() => navigation.navigate("Questions", { 'questions': tips["Minha gravidez"].items })} >
              <ViewIconTitle>
                <ViewIconContainer>
                  <Icon source={require('./../../assets/img/tips/myPregnancy.png')} />
                </ViewIconContainer>
                <Title>Minha Gravidez</Title>
              </ViewIconTitle>
            </ButtonFeatures>
          </Col>

          <Col>
            <ButtonFeatures onPress={() => navigation.navigate("Questions", { 'questions': tips["Chegou a Hora"].items })} >
              <ViewIconTitle>
                <ViewIconContainer>
                  <Icon source={require('./../../assets/img/tips/baby.png')} />
                </ViewIconContainer>
                <Title>Chegou a Hora</Title>
              </ViewIconTitle>
            </ButtonFeatures>
          </Col>
        </Row>

        <Row>
          <Col>
            <ButtonFeatures onPress={() => navigation.navigate("Questions", { 'questions': tips["Após o parto"].items })} >
              <ViewIconTitle>
                <ViewIconContainer>
                  <Icon source={require('./../../assets/img/tips/timer.png')} />
                </ViewIconContainer>
                <Title>Após o parto</Title>
              </ViewIconTitle>
            </ButtonFeatures>
          </Col>
        </Row>
      </CardTips>
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



