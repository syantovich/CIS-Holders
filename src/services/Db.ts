import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { PlaceType } from 'types/types';

class DbConstructor {
  db = firestore();

  async getCategories() {
    const categories = await this.db.collection('categories').orderBy('name', 'asc').get();
    const nameCategories: string[] = [];
    categories.forEach((dataSnapshot) => {
      nameCategories.push(dataSnapshot.data().name);
    });
    console.log(nameCategories);
  }

  async getPlaces() {
    try {
      const results: PlaceType[][] = [];
      const querySnapshot = await this.db.collection('places').orderBy('type', 'asc').get();
      let previousType: undefined | string;
      querySnapshot.forEach((e) => {
        const data = e.data() as PlaceType;
        if (previousType !== data.type) {
          results.push([data]);
        } else {
          results[results.length - 1].push(data);
        }
        previousType = e.data().type;
      });
      return results;
    } catch (e) {
      return [];
    }
  }
}
const db = new DbConstructor();
export default db;
