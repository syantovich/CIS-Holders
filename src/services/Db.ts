import firestore from '@react-native-firebase/firestore';

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
}
const db = new DbConstructor();
export default db;
