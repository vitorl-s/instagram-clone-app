import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  storiesContainerList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  storiesContainer: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 50,
    height: 60,
    width: 60,
    margin: 13,
  },
  storiesUser: {
    fontSize: 15,
    marginLeft: '7%',
  },
  horizontalScrollViewContent: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
  },
  textUser: {
    fontSize: 15,
    marginLeft: '7%',
  },
  horizontalScrollViewContainer: {
    flex: 1,
    height: '30%',
    marginBottom: 15,
  },
  userPhoto: {
    marginLeft: 15,
    fontWeight: 'bold',
  },
  photosContainer: {
    marginTop: 50,
    flex: 1,
  },
  photoImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
  },
  photoDescription: {
    marginLeft: 5,
    fontWeight: '200',
  },
});
