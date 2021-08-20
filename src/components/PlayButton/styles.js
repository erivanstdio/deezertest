import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  
  playButton: {
    justifyContent: 'center',
    marginRight: 20,
    margin: 9,
    width: 46,
    height: 46,
    backgroundColor: '#0af',
    borderRadius: 30,
  },
  play: {
    marginLeft: 18,
    height: 0,
    width: 0,
    borderWidth: 8,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftWidth: 12,
    borderLeftColor: '#fff',
  }
})

export default styles;