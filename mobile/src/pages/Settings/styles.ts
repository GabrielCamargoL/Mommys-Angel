import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px
  margin: 50px 15px;
  width: 380px;
`;


export const ButtonFeatures = styled.TouchableOpacity`
  margin: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 115px;
  border-radius: 12px;
`;