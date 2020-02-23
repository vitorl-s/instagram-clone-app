import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: 48,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cameraImage: {
    marginLeft: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  logo: {
    resizeMode: 'contain',
    marginTop: 5,
    alignSelf: 'center',
  },
  send: {
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: 10,
  },
});
