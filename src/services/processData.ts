import { CategoryListType, IPlaceType, ISlideInfo } from 'types/types';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

class ProcessDataClass {
  placesByType(places: FirebaseFirestoreTypes.QuerySnapshot) {
    const results: CategoryListType[] = [];
    const storeIndex: { [key: string]: number } = {};
    places.forEach((e: any, index) => {
      const data = e.data() as IPlaceType;
      if (data.type in storeIndex) {
        results[storeIndex[data.type]].data.push(data);
      } else {
        results.push({ title: data.type, data: [data] });
        storeIndex[data.type] = index;
      }
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

  getAboutUsArray(sliders: FirebaseFirestoreTypes.QuerySnapshot) {
    const result: ISlideInfo[] = [];
    sliders.forEach((dataSnapshot) => {
      const data = dataSnapshot.data() as ISlideInfo;
      result.push(data);
    });
    return result;
  }
}
const processingData = new ProcessDataClass();
export default processingData;
