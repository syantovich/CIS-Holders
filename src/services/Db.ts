import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Asset } from 'react-native-image-picker';

class DbConstructor {
  db = firestore();

  getCategories = async () => {
    const categories = await this.db.collection('categories').orderBy('name', 'asc').get();
    return categories;
  };

  getPlaces = async () => {
    const result = await this.db.collection('places').orderBy('type', 'asc').get();
    return result;
  };

  uploadImage = async (asset: Asset) => {
    if (asset.uri) {
      try {
        const reference = storage().ref(`/placeimage/${asset.fileName}`);
        const res = await reference.putFile(asset.uri);
        const downloadUrl = await reference.getDownloadURL();
        return { uri: downloadUrl, fileName: asset.fileName };
      } catch (e) {
        console.log(e);
      }
    }
  };

  deleteImage = async (fileName: string) => {
    const reference = storage().ref(`placeimage/${fileName}`);
    return reference.delete();
  };
}
const db = new DbConstructor();
export default db;
