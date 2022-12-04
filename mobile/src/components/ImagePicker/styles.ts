import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 5,
  }
})`
  flex: 1;
  margin-top:10;
`;

export const ScrollImages = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { marginLeft: 0 },
  showsHorizontalScrollIndicator: false
})`
`;

export const Remove = styled.Text`
  font-family: Roboto-Medium;
  font-size: 14;
  color:#bb0000;
`;

export const StepText = styled.Text`
  font-size: 15;
  font-family: Roboto-Bold;
  color: #1B4263;
  align-self: center;
  margin-bottom: 10
`;

export const Col = styled.View`
  flex-direction: column;
  display:flex;
  align-items:center;
`;

export const Row = styled.View.attrs({

})`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 10;
`;

export const Label = styled.Text`
  margin-bottom: 5;
  font-family: Roboto-Medium;
  font-size: 14;
  color: #767272;
`;

export const ExempleImage = styled.Image`
  height:75;
  width:100;
`;

export const ExempleText = styled.Text`
  font-family: Roboto-thin;
  font-size: 12;
  margin-bottom:15
`;

export const Button = styled.TouchableOpacity`
  height: 45;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 30;
  border-radius: 5;
  background-color: #3B5998;
  margin-bottom: 20;
`;


export const ButtonText = styled.Text`
  font-family: Roboto-Medium;
  color: #FFF;
`;

