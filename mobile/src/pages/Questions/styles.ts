import styled from "styled-components/native";


export const CardTips = styled.View`
  background-color: #fff;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  border-radius: 12px;
  margin: 20px 0px;
  padding: 8px 0px;
  align-self: center;
`;

export const ViewIcon = styled.View`  
  align-self:center;
  align-items: center;
  justify-content: center;
  
  margin-top: 20px;
  height: 200px;
  width: 200px;
  
  border-radius: 100px;
  background-color: #FCCEC2;
`;

export const IconTips = styled.Image`
  height: 150px;
  width: 150px;
`;

export const TitleTips = styled.Text`
  margin-top: 10px;
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-size: 12px;
  color: #271E4A;

  text-align: justify;
  letter-spacing: 0.374px;
`;

export const DescriptionTips = styled.Text`
  margin-top: 5px;
  font-family: 'Montserrat-SemiBold';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  color: #271E4A;

  opacity: 0.7;
  text-align: justify;
`;