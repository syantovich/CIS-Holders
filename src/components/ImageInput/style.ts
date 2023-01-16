import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputImageWrapper: {
    flexDirection: 'row',
    width: 300,
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10
  },
  fileName: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  fileNameTextStyle: { color: '#fff' },
  imageSize: { fontSize: 15 },
  icons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageWrapper: {
    display: 'flex',
    width: 300,
    height: 100,
    flexDirection: 'row',
    marginBottom: 5
  },
  image: {
    flex: 1
  },
  modalImage: {
    width: Dimensions.get('screen').width - 50,
    height: Dimensions.get('screen').height - 150
  },
  deleteImage: { display: 'flex', justifyContent: 'center' }
});

export default styles;
