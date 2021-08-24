import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 48,
    backgroundColor: '#2255cc',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  splitLeft: {
    borderRightWidth: 0.5,
    borderRightColor: '#fff',
    width: '50%',
    alignItems: 'center'
  },
  splitRight: {
    borderLeftWidth: 0.5,
    borderLeftColor: '#fff',
    width: '50%',
    alignItems: 'center'
  },
  bottomIcon: {
    tintColor: '#fff',
    width: 25,
    height: 25,
  }
})

export default styles;