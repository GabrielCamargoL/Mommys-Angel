import styled from 'styled-components/native';
import { TouchableOpacityProps, View } from 'react-native';

interface TouchableType extends TouchableOpacityProps {
  backgroundColor: string;
}

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`;

export const Col = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonFeatures = styled.TouchableOpacity<TouchableType>`
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#AAA'};
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 40px;
`;

export const IconFeature = styled.Image`
  margin-left: 3px;
  width: 22px;
  height: 30px;
  resize: both;
`;