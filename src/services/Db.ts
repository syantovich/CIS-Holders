import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Asset } from 'react-native-image-picker';
import { FilteredFieldsType, IPlaceItem, IPlaceType } from 'types/types';
import uuid from 'react-native-uuid';

class DbConstructor {
  db = firestore();

  getCategories = async () => {
    const categories = await this.db.collection('categories').orderBy('name', 'asc').get();
    return categories;
  };

  getPlaces = async ({
    arrayToFilter,
    date: { min, max },
    orderBy: { value, direction }
  }: FilteredFieldsType) => {
    console.log(value, direction);
    let ref = this.db.collection<IPlaceType>('places') as FirebaseFirestoreTypes.Query<IPlaceType>;
    if (arrayToFilter.length !== 0) {
      ref = ref.where('type', 'in', arrayToFilter);
    }
    ref = ref.orderBy(value, direction);
    if (min) {
      console.log(min);
      ref = ref.where('date', '>', min);
    }
    if (max) {
      ref = ref.where('date', '<', max);
    }
    const result = ref.get();

    return result;
  };

  uploadImage = async (asset: Asset) => {
    if (asset.uri) {
      try {
        const reference = storage().ref(`/placeimage/${asset.fileName}`);
        await reference.putFile(asset.uri);
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

  addItem = async (item: IPlaceItem) => {
    const id = uuid.v4();
    const addingObject = { ...item, id, date: new Date() };
    await this.db.collection('places').doc(`${id}`).set(addingObject);
    return addingObject;
  };
}
const db = new DbConstructor();
export default db;
