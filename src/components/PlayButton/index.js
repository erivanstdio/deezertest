import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';

const PlayButton = () => {
  return(
    <TouchableOpacity>
      <View style={styles.playButton}>
        <View style={styles.play}></View>
      </View>
    </TouchableOpacity>
  );
}

export default PlayButton;