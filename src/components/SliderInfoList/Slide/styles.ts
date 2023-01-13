import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapperText: { flex: 0.4 },
  description: {
    fontWeight: '300',
    color: '#62656b',
    textAlign: 'justify',
    paddingHorizontal: 20
  },
  title: {
    fontWeight: '800',
    fontSize: 28,
    marginBottom: 10,
    color: '#493d8a',
    textAlign: 'center'
  }
});

export default styles;
