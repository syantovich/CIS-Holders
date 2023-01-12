import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  wrapperList: {
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    width: 200,
    top: '100%',
    zIndex: 2
  },
  allScreen: {
    width: 1000,
    height: 1000,
    position: 'absolute',
    right: -100,
    top: -100,
    backgroundColor: 'rgba(0,0,0,0.2)',
    zIndex: 1
  }
});
export default styles;
