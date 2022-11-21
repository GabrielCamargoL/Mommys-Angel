import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';

import { tips } from '../../utils/tips';
import { CardTips, DescriptionTips, IconTips, TitleTips, ViewIcon } from './styles';

export default function Tips() {
  const { width, height } = useWindowDimensions();
  const carouselData = tips

  return (
    <GestureHandlerRootView style={styles.container}>
      <CardTips>
        <Carousel
          data={carouselData['Mudanças no corpo']}
          style={styles.carousel}
          width={width * 0.90}
          pagingEnabled={true}
          snapEnabled={true}
          loop={true}
          autoPlay={false}
          autoPlayReverse={false}
          renderItem={({ item, index }) => (
            <View>
              <TouchableOpacity onPress={() => Alert.alert(`Dica numero ${index}: ${item.title}\n`)}>
                <ViewIcon>
                  <IconTips source={item.icon} />
                </ViewIcon>
                <TitleTips>{item.title}</TitleTips>
                <DescriptionTips>{item.description}</DescriptionTips>
              </TouchableOpacity>
            </View>
          )}
        />
      </CardTips>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E6F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carousel: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 32,
  }
});