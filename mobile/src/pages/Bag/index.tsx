import { ScrollView, Text, View } from "react-native";
import { tips } from "../../utils/tips";
import { CardTips, Container, Image, TextItems, Title, ViewItems, ViewRoundedImage } from "./styles";

export default function Bag() {

  return (
    <ScrollView>

      <Container>
        <CardTips>
          <ViewRoundedImage>
            <Image source={require('../../assets/img/tips/Bagicon.png')} />
          </ViewRoundedImage>
          <Title>LISTA DE COISAS PARA LEVAR</Title>

          <View style={{ width: '100%' }}>
            {tips["A mala"].items.map((item, index) => {
              return (
                <ViewItems>
                  <TextItems>{item}</TextItems>
                </ViewItems>
              )
            })}
          </View>
        </CardTips>
      </Container>
    </ScrollView>
  )
}