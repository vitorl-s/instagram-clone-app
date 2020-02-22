import React from 'react';
import {View, Text, ScrollView, Image, useState} from 'react-native';
import {styles} from './styles';
import {filtered} from '../../../followersInfo';
const INITIAL_IMAGE =
  'https://nacoesunidas.org/wp-content/uploads/2016/03/amazonia_floresta_%C3%A1gua.jpg';
export default function HomePage() {
  function renderMultipleStories() {
    return filtered.map((item, index) => {
      return (
        <View
          key={index}
          style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
          <View style={styles.storiesContainer} />
          <Text style={styles.storiesUser}>{item.screen_name}</Text>
        </View>
      );
    });
  }

  return (
    <ScrollView nestedScrollEnabled style={styles.scrollViewContainer}>
      <ScrollView
        horizontal
        scrollEnabled
        style={styles.horizontalScrollViewContainer}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollViewContent}>
        {renderMultipleStories()}
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
