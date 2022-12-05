import { Text, View, StyleSheet, useWindowDimensions, Image, TouchableOpacity, Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import Modal from "react-native-modal";
import { useEffect, useState } from 'react';

import CamPicker from '../../components/ImagePicker';
import { api } from '../../services/api';
import SessionController from '../../utils/SessionController';
import Loading from '../../components/Loading';
import { Button, TextButton, Title } from './styles';

interface carouselDataProps {
  originalName: string,
  mimeType: string,
  file: string
}

export default function Gallery() {
  const { width } = useWindowDimensions();
  const [carouselData, setCarouselData] = useState<Array<carouselDataProps>>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getImages()
  }, []);

  async function getImages() {
    setLoading(true)
    const user = await SessionController.getUserInfo();
    const response = await api.get(`/gestations/${user?._id}`)
    setCarouselData(response.data[0].gallery)
    setLoading(false)
  }

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (<>
    {loading ?
      <Loading /> :
      <>
        <GestureHandlerRootView style={styles.container}>
          {carouselData.length > 0 ? <Carousel
            data={carouselData}
            style={{
              width: '100%',
              height: 300,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F3E6F7',
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
              stackInterval: 18,
              opacityInterval: 1,
              showLength: 2
            }}
            customConfig={() => ({ type: 'positive', viewCount: 5 })}
            renderItem={({ item, index }) => (
              <View>
                <TouchableOpacity onPress={() => Alert.alert(`Foto: ${index}\n${item.originalName}`)}>
                  <Image style={{ height: 300, width: 300 }} source={{ uri: `data:${item.mimeType};base64,${item.file}` }} />
                </TouchableOpacity>
              </View>
            )}
          /> :
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Title>{'Você ainda não tem fotos sobre a sua gestação :['}</Title>
            </View>
          }

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button onPress={toggleModal} >
              <TextButton>Adicionar Fotos a galeria</TextButton>
            </Button>
          </View>

          <Modal
            style={StyleSheet.absoluteFill}
            isVisible={isModalVisible}
            deviceWidth={width}
            onBackButtonPress={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}
            onModalWillHide={() => getImages()}
            hideModalContentWhileAnimating={true}
            backdropColor={'#FFF'}
            hasBackdrop
          >
            <CamPicker />
          </Modal>
        </GestureHandlerRootView>

      </>
    }

  </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E6F7',
  },
});