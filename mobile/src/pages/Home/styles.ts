import styled from 'styled-components/native';
import { TouchableOpacityProps, StatusBar, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface TouchableType extends TouchableOpacityProps {
  backgroundColor: string;
}

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  padding-top: ${StatusBar.currentHeight}px;
  background-color: #F3E6F7;
`;

export const Container = styled.ScrollView`
  flex: 1;
  background-color: #F3E6F7;
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