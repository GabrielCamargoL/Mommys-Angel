import styled from 'styled-components/native';
import { TouchableOpacityProps, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TouchableType extends TouchableOpacityProps {
  backgroundColor: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #F3E6F7;
  align-items: center;
  justify-content: center;
`;

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