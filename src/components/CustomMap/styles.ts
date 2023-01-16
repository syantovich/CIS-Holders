import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  },
  wrapperSaveButton: { position: 'absolute', bottom: -40, right: 0 }
});

export default styles;
