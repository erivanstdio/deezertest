import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
    width: '100%',
    borderColor: '#ccccff',
    borderBottomWidth: 0.2,
    justifyContent: 'space-between',
  },
  info: {
    width: 120,
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20,
    justifyContent: 'space-between',
  },
  description: {
    alignSelf: 'center',
    flexDirection: 'column',
  },
  songName: {
    color: '#fff',
  },
  artist: {
    fontSize: 10,
    color: '#fff'
  },
})

export default styles;