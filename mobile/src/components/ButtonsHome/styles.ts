import styled from 'styled-components/native';
import { TouchableOpacityProps, View } from 'react-native';

interface TouchableType extends TouchableOpacityProps {
  backgroundColor: string;
}

export const Container = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
  margin-top: 50px
  margin: 50px 15px;
  width: 380px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self:stretch;
`;

export const Col = styled.View`
  flex: 1
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonFeatures = styled.TouchableOpacity<TouchableType>`
  margin: 5px;
  align-items: flex-start;
  justify-content: center;
  height: 115px;
  border-radius: 12px;
  align-self: stretch;
`;

export const IconFeature = styled.Image`
  
`;

export const Title = styled.Text`
  font-family: 'Montserrat-SemiBold';
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #FFF;
  margin-top: 5px;
`;