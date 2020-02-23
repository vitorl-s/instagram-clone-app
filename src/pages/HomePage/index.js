import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header';
import Photos from '../../components/Photos';

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
      filteredData.push({
        name: item.login,
        image: item.avatar_url,
        id: item.id,
      });
    });
    await shuffleArray(filteredData);
    await setUsersInfo(filteredData);
  };

  const shuffleArray = async array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
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
          {usersInfo.map(item => (
            <View key={item.id} style={styles.storiesItem}>
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
        <Photos />
      </ScrollView>
    </View>
  );
}
