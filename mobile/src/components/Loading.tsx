import React from 'react';
import Lottie from 'lottie-react-native'; // if you have "esModuleInterop": true
// import LottieView = require('lottie-react-native'); // otherwise you have "esModuleInterop": false

export default class Loading extends React.PureComponent {
  render() {
    return (
      <Lottie
        source={require('../assets/loading-mombaby.json')}
        autoPlay
        loop
        speed={2}
      />
    );
  }
}