import React from 'react';
import {View, Image} from 'react-native';

import {styles} from './styles';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../../assets/Images/camera.png')}
        style={styles.cameraImage}
      />
      <Image
        source={require('../../assets/Images/logo.png')}
        style={styles.logo}
      />
      <Image
        source={require('../../assets/Images/send.png')}
        style={styles.send}
      />
    </View>
  );
}
