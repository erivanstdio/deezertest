import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const BottomBar = () => {
  
  const navigation = useNavigation();
  
  return(
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('MySongs')} style={styles.splitLeft}>
        <Image style={styles.bottomIcon} source={require('../../../assets/star.png')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Favourites')} style={styles.splitRight}>
        <Image style={styles.bottomIcon} source={require('../../../assets/heart.png')} />
      </TouchableOpacity>
    </View>
  );
}

export default BottomBar;