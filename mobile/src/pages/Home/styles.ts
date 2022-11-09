import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';

interface TouchableType extends TouchableOpacityProps {
  color: string;
  isDisabled: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: #F8E9F2;
  align-items: center;
  justify-content: center;
`;

export const ButtonFeaturesView = styled.View`
  flex: 1;
  background-color: #00C0FF;
  align-items: center;
  justify-content: center;
`;

export const ButtonFeatures = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
`;