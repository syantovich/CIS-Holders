import { COLLECTIONS_NAME, STORAGE_PATHS } from 'constants/index';
import { FilteredFieldsType, IPlaceItem, IPlaceType } from 'types/types';
import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { Asset } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import uuid from 'react-native-uuid';

export class DataProvider {
  static getCategories = async () => {
    const categories = await firestore()
      .collection(COLLECTIONS_NAME.CATEGORY)
      .orderBy('name', 'asc')
      .get();
    return categories;
  };

  static getPlaces = async ({
    arrayToFilter,
    orderBy: { value, direction }
  }: FilteredFieldsType) => {
    let ref = firestore().collection<IPlaceType>(
      COLLECTIONS_NAME.PLACES
    ) as FirebaseFirestoreTypes.Query<IPlaceType>;
    if (arrayToFilter.length !== 0) {
      ref = ref.where('type', 'in', arrayToFilter);
    }
    ref = ref.orderBy(value, direction);
    const result = await ref.get();

    return result;
  };

  static uploadImage = async (asset: Asset) => {
    if (asset.uri) {
      try {
        const reference = storage().ref(STORAGE_PATHS.places(asset.fileName));
        await reference.putFile(asset.uri);
        const downloadUrl = await reference.getDownloadURL();
        return { uri: downloadUrl, fileName: asset.fileName };
      } catch (e) {
        console.log(e, 2);
        return { uri: undefined, fileName: undefined };
      }
    }
  };

  static deleteImage = async (fileName: string) => {
    const reference = storage().ref(STORAGE_PATHS.places(fileName));
    return reference.delete();
  };

  static addItem = async (item: IPlaceItem) => {
    const id = uuid.v4();
    const name = item.name[0].toUpperCase() + item.name.slice(1);
    const addingObject = { ...item, id, date: new Date(), name };
    await firestore().collection(COLLECTIONS_NAME.PLACES).doc(`${id}`).set(addingObject);
    return addingObject;
  };

  static getAboutUsInfo = async () => {
    const results = await firestore()
      .collection(COLLECTIONS_NAME.ABOUT)
      .orderBy('order', 'asc')
      .get();
    return results;
  };
}
