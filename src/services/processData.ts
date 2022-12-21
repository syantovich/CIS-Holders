import { CategoryListType, PlaceType } from 'types/types';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

class ProcessDataClass {
  placesByType(places: FirebaseFirestoreTypes.QuerySnapshot) {
    const results: CategoryListType[] = [];
    let previousType: undefined | string;
    places.forEach((e: any) => {
      const data = e.data() as PlaceType;
      if (previousType !== data.type) {
        results.push({ title: data.type, data: [data] });
      } else {
        results[results.length - 1].data.push(data);
      }
      previousType = e.data().type;
    });

    return results;
  }

  getArrayCategoriesByName(categories: FirebaseFirestoreTypes.QuerySnapshot) {
    const nameCategories: string[] = [];
    categories.forEach((dataSnapshot) => {
      nameCategories.push(dataSnapshot.data().name);
    });
    return nameCategories;
  }
}
const processingData = new ProcessDataClass();
export default processingData;
