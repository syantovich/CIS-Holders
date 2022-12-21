import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: `rgba(0,0,0,0.5)`
  },
  closeIcon: { position: 'absolute', top: 5, right: 15, zIndex: 2 },
  wrapper: {
    padding: 20,
    paddingTop: 30,
    borderRadius: 10,
    backgroundColor: '#ffffff'
  }
});
export default styles;
