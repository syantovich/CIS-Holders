import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: { marginBottom: 2 },
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  wrapperIcon: {
    width: 50,
    marginTop: 18,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#000'
  },
  colorIcon: {
    color: '#fff'
  },
  wrapperInputs: {
    flex: 1,
    marginRight: 2
  },
  wrapperMap: { width: 300, height: 300, marginBottom: 40 }
});

export default styles;
