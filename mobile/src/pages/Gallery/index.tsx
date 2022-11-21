import * as React from 'react';
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
export default function Gallery() {
  const { width } = useWindowDimensions();
  const carouselData = [
    {
      name: 'mulher gravida 0',
      image: require('../../assets/img/pregnant_sample.png'),
    },
    {
      name: 'mulher gravida 1',
      image: require('../../assets/img/pregnant_sample.png'),
    },
    {
      name: 'mulher gravida 2',
      image: require('../../assets/img/pregnant_sample.png'),
    },
    // Uncomment 4th image to see the difference
    // {
    //   image: require('./assets/blue.jpeg'),
    // },
  ];

  return (
    <GestureHandlerRootView style={styles.container}>
      <Carousel
        data={carouselData}
        style={{
          width: '100%',
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
        }}
        width={280}
        height={210}
        pagingEnabled={true}
        snapEnabled={true}
        mode={'horizontal-stack'}
        loop={true}
        autoPlay={false}
        autoPlayReverse={false}
        modeConfig={{
          snapDirection: 'left',
          stackInterval: 18
        }}
        customConfig={() => ({ type: 'positive', viewCount: 5 })}
        renderItem={({ item, index }) => (
          <View>
            <TouchableOpacity onPress={() => Alert.alert(`Foto: ${index}\n${item.name}`)}>
              <Image source={require('../../assets/img/pregnant_sample.png')} />
            </TouchableOpacity>
          </View>
        )}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E6F7',
  },
});