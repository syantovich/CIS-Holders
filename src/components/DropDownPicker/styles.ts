import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: { flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pickerContainer: {
    flex: 1,
    color: '#ffffff',
    paddingHorizontal: 20
  },
  pickerItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    width: 300,
    marginBottom: 2
  },
  pickerItemWrapperBackground: {
    backgroundColor: '#000000',
    borderRadius: 10
  },
  paddingItem: { paddingHorizontal: 20 },
  pickerItemColor: {
    color: '#ffffff'
  },
  list: {
    width: 300,
    height: 90
  }
});
