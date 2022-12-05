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

export const Title = styled.Text`
  margin-top: 20px;
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-size: 20px;

  color: #511;
  text-align: center;
  align-self: center;
  justify-self: center;
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
  margin-top: 20px;
  font-family: 'Montserrat-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #511;
  text-align: center;
  align-self: center;
  justify-self: center;
`;

export const ExempleImage = styled.Image`
  height:75;
  width:100;
`;

export const Button = styled.TouchableOpacity`
  height: 45;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 30;
  border-radius: 5;
  background-color: #D53F8C;
  margin-bottom: 20;
`;


export const ButtonText = styled.Text`
  font-family: Roboto-Medium;
  color: #FFF;
`;

