import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Alert, AsyncStorage } from 'react-native';
import ImagePicker, { } from 'react-native-image-crop-picker';
import { api } from '../../services/api';
import SessionController from '../../utils/SessionController';

import {
  Container,
  Col,
  Title,
  ScrollImages,
  Remove,
  Button,
  ButtonText,
  Label,
} from './styles';

export default function CamPicker() {

  Label.defaultProps = {};
  Label.defaultProps.maxFontSizeMultiplier = 1;

  ButtonText.defaultProps = {};
  ButtonText.defaultProps.maxFontSizeMultiplier = 1;

  const [images, setImages] = useState([]);


  async function alertMessage(messagem) {
    Alert.alert(
      'Aviso',
      `${messagem}`,
      [{ text: 'OK', onPress: () => { } }],
      { cancelable: true },
    );
  }

  async function openGallery() {
    ImagePicker.openPicker({
      multiple: true,
      maxFiles: 10,
      mediaType: 'photo',
    }).then(files => {
      if (files.length > 10) {
        return Alert.alert(
          'Aviso',
          `limite de fotos ultrapassado (${files.length}/10).`,
          [{ text: 'OK', onPress: () => { } }],
          { cancelable: false },
        );
      }
      let acceptedFiles: any = [];
      for (var file of files) {
        if (file.size < 30000000) {
          acceptedFiles = [...acceptedFiles, file];
        }
        else {
          Alert.alert(
            'Aviso',
            'Algumas imagens não foram adicionadas devido ao tamanho dos arquivos.',
            [{ text: 'OK', onPress: () => { } }],
            { cancelable: false },
          );
        }

        setImages(images.concat(acceptedFiles));
      }
    });
  }

  async function openCam() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      let acceptedFiles: any = [];
      acceptedFiles = [...acceptedFiles, image];
      setImages(images.concat(acceptedFiles));
    });
  }

  async function removeImage(index) {
    if (images.length === 1) {
      return setImages([])
    }

    let pivot = images.filter((item, iterableIndex) => index !== iterableIndex)
    setImages(pivot)
  }

  function viewImages() {
    return images.map(function (image: any, index) {
      return (
        <>
          <Col>
            <Image
              source={{ uri: image.path }}
              style={{ width: 100, height: 75, marginLeft: 1 }}
              resizeMode="cover"
            />
            <TouchableOpacity onPress={() => removeImage(index)}>
              <Remove>Remover</Remove>
            </TouchableOpacity>
          </Col>
        </>
      );
    });
  }


  async function uploadFile() {
    try {
      const formData = new FormData();

      for (var key of Object.keys(images)) {
        console.log(images[key])
        formData.append('image', {
          uri: images[key].path,
          type: images[key].mime,
          name: `${images[key].path}`,
        });
      }

      const user = await SessionController.getUserInfo()
      const id = user?._id;


      const response = await api.put(`/gestations/${id}/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${await SessionController.getToken()}`,
        },
      });
    } catch (err) {
      console.log(`imagem: ${err}`);
    }
  }

  return (
    <>
      <Container>

        <Title>Enviar umas fotos</Title>

        <Label>{'Registre os momentos da sua gestação para recordação'}</Label>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <ScrollImages>{viewImages()}</ScrollImages>
        </View>
        <View
          style={{
            height: 380,
            borderBottomWidth: 1,
            marginBottom: 25,
            marginTop: 10,
          }}>

          <Button
            onPress={() => { openGallery() }}>
            <ButtonText>Acessar Galeria</ButtonText>
          </Button>

          <Button
            onPress={() => { openCam() }}>
            <ButtonText>Acessar Camera</ButtonText>
          </Button>

          <Button
            onPress={() => { uploadFile() }}>
            <ButtonText>Enviar imagens</ButtonText>
          </Button>
        </View>
      </Container>
    </>
  );
}
