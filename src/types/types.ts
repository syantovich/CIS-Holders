import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import Timestamp = FirebaseFirestoreTypes.Timestamp;
import { DIRECTION_SORT, VALUES_ORDER } from 'constants/index';

export interface IPlaceItem {
  name: string;
  description: string;
  image: { uri?: string };
  coordinates: { latitude?: number; longitude?: number };
  type: string;
}
export interface IPlaceType extends IPlaceItem {
  id: string;
  date: Timestamp;
}
export type CategoryType = {
  name: string;
};
export type CategoryListType = {
  title: string;
  data: IPlaceType[];
};
export type CoordinatesType = {
  latitude: number | string;
  longitude: number | string;
};
export type OrderByType = { value: VALUES_ORDER; direction: DIRECTION_SORT };
export type FilteredFieldsType = {
  orderBy: OrderByType;
  arrayToFilter: string[];
  date: { min?: Date; max?: Date };
};
