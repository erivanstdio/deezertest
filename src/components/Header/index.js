import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Header = ( {title} ) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity>
          <Image style={styles.searchIcon} source={require('../../../assets/search.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;