import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  screenContainer:{
    flex: 1,
    backgroundColor: 'white',
  },
  storiesContainerList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  storiesContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'red',
    borderWidth: 3,
    borderRadius: 60,
    height: 60,
    width: 60,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 15,
  },
  storiesUser: {
    fontSize: 12,
    marginLeft: '7%',
  },
  horizontalScrollViewContent: {
    flexGrow: 1,
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
    marginBottom: 5,
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
  storiesImgContainer: {
    flex: 1,
  },
  imgStories: {
    width: 55,
    height: 55,
    borderRadius: 55,
    overflow: 'hidden',
  },
  textStoriesContainer: {
    flex: 1,
    width: 85,
    alignItems: 'center',
  },
  storiesItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
