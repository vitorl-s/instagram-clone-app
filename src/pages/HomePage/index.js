import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header';
const INITIAL_IMAGE =
  'https://nacoesunidas.org/wp-content/uploads/2016/03/amazonia_floresta_%C3%A1gua.jpg';
export default function HomePage() {
  const [fullName, setFullName] = useState({
    name: 'name',
    familyName: 'family',
  });
  const [usersInfo, setUsersInfo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFullName({name: 'Marco', familyName: 'Shaw'});
    filterData();
  }, []);

  const filterData = async () => {
    const response = await fetch(
      'https://api.github.com/users/vitorl-s/followers',
    );
    const data = await response.json();
    let filteredData = [];
    await data.map((item, index) => {
      filteredData.push({name: item.login, image: item.avatar_url});
    });
    await setUsersInfo(filteredData);
  };

  return (
    <View style={styles.screenContainer}>
      <Header />
      <ScrollView nestedScrollEnabled style={styles.scrollViewContainer}>
        <ScrollView
          horizontal
          scrollEnabled
          style={styles.horizontalScrollViewContainer}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScrollViewContent}>
          {usersInfo.map((item, index) => (
            <View key={index} style={styles.storiesItem}>
              <View style={styles.storiesContainer}>
                <View style={styles.storiesImgContainer}>
                  <Image source={{uri: item.image}} style={styles.imgStories} />
                </View>
              </View>
              <View style={styles.textStoriesContainer}>
                <Text style={styles.storiesUser}>
                  {item.name.length > 11
                    ? item.name.slice(0, 11) + '...'
                    : item.name}
                </Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.photosContainer}>
          <Image source={{uri: INITIAL_IMAGE}} style={styles.photoImage} />
          <View>
            <Text style={styles.userPhoto}>
              {fullName.name}{' '}
              <Text style={styles.photoDescription}>photo.description</Text>{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
