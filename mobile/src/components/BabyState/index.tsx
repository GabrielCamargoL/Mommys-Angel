import { weeksBetween } from "../../utils/weeksBetween";
import { BabyCard, CardDescription, CardSubTitle, CardTitle, Col, Container, Row } from "./styles";

export function BabyState() {

  return (
    <Container>
      <BabyCard>
        <CardTitle>Semana {weeksBetween(new Date('2021-12-01'), new Date('2022-12-18'))}</CardTitle>
        <CardSubTitle>Dia 6</CardSubTitle>
        <CardDescription>Seu bebê está com 51cm. S2
          {'\n\n'}Cuide bem dele, que logo logo este amorzinho estára em seus braços.</CardDescription>
      </BabyCard>
    </Container>
  )
}


