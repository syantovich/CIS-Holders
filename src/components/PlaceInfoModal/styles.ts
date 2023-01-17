import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { minWidth: 300, minHeight: 150 },
  wrapperFields: { flex: 1 },
  wrapperField: { flex: 1, flexDirection: 'row' },
  wrapperImageField: { flex: 10, flexDirection: 'row' },
  image: { width: '100%', flex: 1, paddingLeft: 100, marginBottom: 10 },
  wrapperFieldText: {
    flex: 1,
    width: 100
  },
  textTimeCreated: {
    fontSize: 10
  }
});

export default styles;
