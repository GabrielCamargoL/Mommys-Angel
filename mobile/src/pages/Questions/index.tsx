import { Key } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CardTips, DescriptionTips, IconTips, TitleTips, ViewIcon } from './styles';

interface IProps {
  question: string
  answer: string
}

export default function Questions({ route }) {
  const { questions } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>

        <CardTips>
          {questions.map((item: { question: any; answer: any; }, index: Key | null | undefined) => {
            return (
              <View style={{ padding: 10 }} key={index}>
                <TitleTips>{item.question}</TitleTips>
                <View>
                  <DescriptionTips>{item.answer}</DescriptionTips>
                </View>
              </View>
            )
          })}
        </CardTips>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E6F7',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 20
  }
});