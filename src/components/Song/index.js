import React, {Fragment} from 'react';
import { View, Text } from 'react-native';
import Cover from '../Cover';
import PlayButton from '../PlayButton';
import styles from './styles';

const Song = () => {
  return(
    <View style={styles.container}>
      <View style={styles.info}>
        <Cover/>
        <View style={styles.description}>
          <Text style={styles.songName}>SongName</Text> 
          <Text style={styles.artist}>Artist</Text> 
        </View>
      </View>
      <PlayButton/>
    </View>
  );
}

export default Song;