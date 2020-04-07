import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, RefreshControl} from 'react-native';
import {styles} from './styles';
import Header from '../../components/Header';
import Photos from '../../components/Photos';

export default function HomePage() {
  const [images, setImages] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getPhotos();
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

  const getPhotos = async () => {
    let imagesUrl = [];
    for (let i = 0; i < 10; i++) {
      await fetch('https://picsum.photos/1920/1080?' + {i}).then(response => {
        imagesUrl.push(response.url);
      });
    }
    await setImages(imagesUrl);
    await setLoading(true);
  };

  const renderPhotos = () => {
    if (images.length > 0) {
      return images.map((item, index) => (
        <View key={index}>
          <Photos imageUrl={item} />
        </View>
      ));
    } else {
      return;
    }
  };

  const shuffleArray = async array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const _onRefresh = () => {
    setRefreshing(true);
    filterData().then(() => {
      setRefreshing(false);
    });
    getPhotos();
  };

  return (
    <View style={styles.screenContainer}>
      {loading && (
        <>
          <Header />
          <ScrollView
            nestedScrollEnabled
            style={styles.scrollViewContainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={_onRefresh} />
            }>
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
                      <Image
                        source={{uri: item.image}}
                        style={styles.imgStories}
                      />
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
            {renderPhotos()}
          </ScrollView>
        </>
      )}
    </View>
  );
}
