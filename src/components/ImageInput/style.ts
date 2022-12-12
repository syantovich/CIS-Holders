import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputImageWrapper: {
    flexDirection: 'row',
    width: 300
  },
  fileName: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  image: {
    width: 300,
    height: 100
  }
});

export default styles;
