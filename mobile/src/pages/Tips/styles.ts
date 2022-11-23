import styled from 'styled-components/native';
import { Dimensions, StatusBar, TouchableOpacityProps, View } from 'react-native';

interface TouchableType extends TouchableOpacityProps {
  backgroundColor: string;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: ${StatusBar.currentHeight}px;
  width: ${Dimensions.get('screen').width}px;
  background-color: #F3E6F7;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const Col = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonFeatures = styled.TouchableOpacity<TouchableType>`
  margin: 5px;
  align-items: center;
  justify-content: center;
  height: 115px;
  border-radius: 12px;
  align-self: stretch;
`;

export const ViewIconTitle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ViewIconContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 60px;
  background-color: #FCCEC2;
  border-radius: 24px;
`;


export const Icon = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat-Regular';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #271E4A;
  margin-top: 5px;
`;


export const CardTips = styled.View`
  background-color: #fff;
  align-items: space-between;
  justify-content: flex-start;
  width: 90%;
  height: 80%;
  border-radius: 12px;
`;