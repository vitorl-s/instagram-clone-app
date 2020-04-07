import React from 'react';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

export default function Photos(...props) {
  return (
    <View style={styles.photosContainer}>
      <Image source={{uri: props[0].imageUrl}} style={styles.photoImage} />
      <View style={styles.descriptionPhotoContainer}>
        <View style={styles.iconsContainer}>
          <Image
            source={require('../../assets/Images/like.png')}
            style={styles.likeIcon}
          />
          <Image
            source={require('../../assets/Images/comment.png')}
            style={styles.commentIcon}
          />
          <Image
            source={require('../../assets/Images/send.png')}
            style={styles.sendIcon}
          />
        </View>
        <Text style={styles.userPhoto}>
          {'nome'}{' '}
          <Text style={styles.photoDescription}>photo.description</Text>{' '}
        </Text>
      </View>
    </View>
  );
}
