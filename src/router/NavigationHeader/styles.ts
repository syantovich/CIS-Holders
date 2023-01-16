import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperHeader: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,

    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 0.5
  },
  center: { display: 'flex', justifyContent: 'center', alignItems: 'center' },
  wrapperIcon: {
    width: 40,
    height: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default styles;
