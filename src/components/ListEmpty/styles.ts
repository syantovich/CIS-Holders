import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height - 140,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
