import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, TouchableOpacity, Alert, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LinearGradient from 'react-native-linear-gradient';

import { api } from '../../services/api';
import { propsStack } from '../../types/propsStack';
import SessionController from '../../utils/SessionController';


export default function RegisterGestation() {
  const [lastMenstruation, setLastMenstruation] = useState(new Date());
  const [show, setShow] = useState(false);

  const navigation = useNavigation<propsStack>();

  const onChange = (event, selectedDate) => {
    setLastMenstruation(selectedDate);
    setShow(false);
  };

  async function handleRegister() {
    try {
      const userId = await SessionController.getUserInfo();
      await api.post(`/gestations`, { lastMenstruation: lastMenstruation.getTime(), userId: userId?._id });

      navigation.navigate('HomeStack');
    } catch (error) {
      console.error(error);
      Alert.alert('algo deu errado, tente novamente mais tarde.')
    }
  }

  return (<>
    <View style={styles.container}>
      <LinearGradient
        colors={['#EED7F5', '#FCCEC2', '#C6E1FC']}
        style={styles.linearGradient}
      >
        <Image style={styles.logo} source={require('../../assets/img/pregnantBlue.png')} />

        <View style={styles.formContainer}>
          <Button onPress={() => setShow(true)} title="Mostrar calendário" />
          <Text>selecionado: {lastMenstruation.toLocaleDateString('pt-BR')}</Text>
        </View>

        <TouchableOpacity onPress={() => handleRegister()}>
          <View style={styles.button}>
            <Text style={styles.buttonText} >Registar Gestação</Text>
          </View>
        </TouchableOpacity>

        {show && (
          <DateTimePicker
            locale='pt-BR'
            testID="dateTimePicker"
            value={lastMenstruation}
            mode={'date'}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </LinearGradient>
    </View>

  </>
  )
}















const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    width: '100%',
    paddingTop: 20
  },

  logo: {
    width: 274,
    height: 274,
  },

  formContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    marginLeft: 25,

    color: '#271E4A',
    opacity: 0.6,

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },

  input: {
    marginTop: 3,
    marginBottom: 15,
    height: 40,
    width: '100%',

    backgroundColor: '#FAFAFA',
    opacity: 0.6,
    borderRadius: 10,
    borderColor: '#DDD',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 50,
    width: 150,
    backgroundColor: '#BE3CA0',
    marginTop: 30
  },

  buttonText: {
    color: '#fff',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.1,
  },

  headline: {
    marginTop: 20,
    marginBottom: 5,

    color: '#271E4A',

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.1,
  }
})