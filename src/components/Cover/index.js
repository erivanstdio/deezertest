import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const Cover = ({img}) => {
  return(
    <View>
      <Image style={styles.container} source={{ uri:img }}/>
    </View> 
  );
}

export default Cover;