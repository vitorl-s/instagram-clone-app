import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';
const INITIAL_IMAGE =
  'https://nacoesunidas.org/wp-content/uploads/2016/03/amazonia_floresta_%C3%A1gua.jpg';

export default function Photos() {
  return (
    <View style={styles.photosContainer}>
      <Image source={{uri: INITIAL_IMAGE}} style={styles.photoImage} />
      <View>
        <Text style={styles.userPhoto}>
          {'nome'}{' '}
          <Text style={styles.photoDescription}>photo.description</Text>{' '}
        </Text>
      </View>
    </View>
  );
}