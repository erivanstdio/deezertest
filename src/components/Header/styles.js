import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#202055',
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: "white",
  },
  searchIcon: {
    tintColor: '#fff',
    width: 25,
    height: 25,
  }
})

export default styles;