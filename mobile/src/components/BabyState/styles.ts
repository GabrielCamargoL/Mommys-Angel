import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
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

export const BabyCard = styled.View`
  background-color: #fff;
  width: 90%;
  height: 380px;
  border-radius: 24px;
  padding: 7% 10%;
`;

export const CardTitle = styled.Text`
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-size: 28px;
  line-height: 41px;

  color: #271E4A;

  text-align: center;
  letter-spacing: 0.374px;
`;

export const CardSubTitle = styled.Text`
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  color: #271E4A;

  text-align: center;
  letter-spacing: 0.374px;

`;

export const CardDescription = styled.Text`
  margin-top: 20px;
  font-family: 'Montserrat-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;

  color: #271E4A;

  opacity: 0.7;
  line-height: 20px;
  text-align: left;
`;
