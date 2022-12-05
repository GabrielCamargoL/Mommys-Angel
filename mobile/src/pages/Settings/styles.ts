import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 50px 15px;
  background-color:#F3E6F7;
`;


export const ButtonFeatures = styled.TouchableOpacity`
  margin: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 115px;
  border-radius: 12px;
`;