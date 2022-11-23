import { Dimensions, StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${StatusBar.currentHeight}px;
  width: ${Dimensions.get('screen').width}px;
  background-color: #F3E6F7;
`;


export const CardTips = styled.View`
  background-color: #fff;
  align-items: center;
  justify-content: center;
  width: 90%;
  border-radius: 12px;
  padding: 60px 30px;
  margin-bottom: 20px;
`;

export const ViewRoundedImage = styled.View`
  background-color: #FCCEC2;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 200px;
`;


export const Image = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-size: 18px;
  line-height: 20px;
  color: #271E4A;
  margin: 40px 0px 20px 0px;
`;

export const ViewItems = styled.View`
  width: 100%;
  padding: 15px 0px;
  border-bottom-color: #c2c2c2;
  border-bottom-width: 0.5px;
`;

export const TextItems = styled.Text`
  font-family: 'Montserrat-Regular';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #271E4A;
  opacity: 0.7; 
  margin-top: 5px; 
  text-align: center;
`;




