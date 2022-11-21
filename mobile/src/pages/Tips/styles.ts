import styled from "styled-components/native";


export const CardTips = styled.View`
  background-color: #fff;
  align-items: flex-start;
  justify-content: flex-start;
  width: 90%;
  height: 80%;
  border-radius: 12px;
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
  margin-top: 20px;
  font-family: 'Montserrat-Bold';
  font-style: normal;
  font-size: 28px;
  line-height: 41px;

  color: #271E4A;

  text-align: center;
  letter-spacing: 0.374px;
`;

export const DescriptionTips = styled.Text`
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