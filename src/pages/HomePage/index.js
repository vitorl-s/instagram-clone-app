import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

import {styles} from './styles';

const INITIAL_IMAGE = 'https://nacoesunidas.org/wp-content/uploads/2016/03/amazonia_floresta_%C3%A1gua.jpg';
export default function HomePage() {
  return (
    <ScrollView nestedScrollEnabled style={styles.scrollViewContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles}
        contentContainerStyle={styles.horizontalScrollViewContent}>
        <View style={styles.storiesContainerList}>
          <View style={styles.storiesContainer} />
          <Text style={styles.storiesUser}>user</Text>
        </View>
      </ScrollView>
      <View style={styles.photosContainer}>
        <Image source={{uri: INITIAL_IMAGE}} style={styles.photoImage} />
        <Text style={styles.userPhoto}>
          photo.user{'  '}
          <Text style={styles.photoDescription}>photo.description</Text>{' '}
        </Text>
      </View>
    </ScrollView>
  );
}
