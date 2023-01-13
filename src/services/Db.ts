import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { Asset } from 'react-native-image-picker';
import { FilteredFieldsType, IPlaceItem, IPlaceType } from 'types/types';
import uuid from 'react-native-uuid';
import { COLLECTIONS_NAME, STORAGE_PATHS } from 'constants/index';

class DbConstructor {
  db = firestore();

  getCategories = async () => {
    const categories = await this.db
      .collection(COLLECTIONS_NAME.CATEGORY)
      .orderBy('name', 'asc')
      .get();
    return categories;
  };

  getPlaces = async ({ arrayToFilter, orderBy: { value, direction } }: FilteredFieldsType) => {
    console.log(value, direction);
    let ref = this.db.collection<IPlaceType>(
      COLLECTIONS_NAME.PLACES
    ) as FirebaseFirestoreTypes.Query<IPlaceType>;
    if (arrayToFilter.length !== 0) {
      ref = ref.where('type', 'in', arrayToFilter);
    }
    ref = ref.orderBy(value, direction);
    const result = ref.get();

    return result;
  };

  uploadImage = async (asset: Asset) => {
    if (asset.uri) {
      try {
        const reference = storage().ref(STORAGE_PATHS.places(asset.fileName));
        await reference.putFile(asset.uri);
        const downloadUrl = await reference.getDownloadURL();
        return { uri: downloadUrl, fileName: asset.fileName };
      } catch (e) {
        console.log(e);
      }
    }
  };

  deleteImage = async (fileName: string) => {
    const reference = storage().ref(STORAGE_PATHS.places(fileName));
    return reference.delete();
  };

  addItem = async (item: IPlaceItem) => {
    const id = uuid.v4();
    const name = item.name[0].toUpperCase() + item.name.slice(1);
    const addingObject = { ...item, id, date: new Date(), name };
    await this.db.collection(COLLECTIONS_NAME.PLACES).doc(`${id}`).set(addingObject);
    return addingObject;
  };

  getAboutUsInfo = async () => {
    const results = await this.db.collection(COLLECTIONS_NAME.ABOUT).orderBy('order', 'asc').get();
    return results;
  };
}
const db = new DbConstructor();
export default db;
