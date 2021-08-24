import React from 'react';
import { ScrollView, View } from 'react-native';
import BottomBar from '../../components/BottomBar';
import Header from '../../components/Header';
import Song from '../../components/Song';

import styles from './styles';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Header title={"Favoritas"}/>
      <ScrollView >
        <Song/>
      </ScrollView>
      <BottomBar/>
    </View>
  );
}

export default Favourites;