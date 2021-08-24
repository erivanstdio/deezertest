import React from 'react';
import { View, ScrollView } from 'react-native';
import NavigationBar from 'react-native-navbar-color';
import Header from '../../components/Header';
import Song from '../../components/Song';
import BottomBar from '../../components/BottomBar';
import styles from './styles';

NavigationBar.setColor('#000000');

const MySongs = () => {

  
  return(
    <View style={styles.container}>
      <Header title={"Principais Músicas"}/>
      <ScrollView >
        <Song/>
      </ScrollView>
      <BottomBar/>
    </View>
  )
}

export default MySongs;