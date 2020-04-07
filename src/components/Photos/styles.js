import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  userPhoto: {
    marginLeft: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  photosContainer: {
    marginTop: 10,
    flex: 1,
  },
  photoImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginTop: 10,
  },
  photoDescription: {
    marginLeft: 5,
    fontWeight: '200',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: -10,
  },
  descriptionPhotoContainer: {
    flex: 1,
  },
  likeIcon: {
    resizeMode: 'contain',
    height: 25,
  },
  commentIcon: {
    marginLeft: 15,
    resizeMode: 'contain',
    height: 25,
  },
  sendIcon: {
    marginLeft: 15,
    resizeMode: 'contain',
    height: 25,
  },
});
