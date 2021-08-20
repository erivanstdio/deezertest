import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../components/Header';
import Song from '../../components/Song';

const MySongs = () => {
  return(
    <View style={styles.container}>
      <Header/>
      <ScrollView >
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
      </ScrollView>
    </View>
  )
}

export default MySongs;