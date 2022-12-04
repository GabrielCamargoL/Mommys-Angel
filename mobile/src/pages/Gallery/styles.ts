import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-top: 50px
  margin: 50px 15px;
  width: 380px;
`;

export const Button = styled.TouchableOpacity`
  width: 280px;
  height: 40px;
  border-radius: 8px;
  background-color: #F687B3;
`;

export const TextButton = styled.Text`
  margin-top: 20px;
  font-family: 'Montserrat-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  color: #fff;

  opacity: 0.85;
  text-align: center;
  align-self: center;
  justify-self: center;
`;
