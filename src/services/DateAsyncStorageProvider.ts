import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_FILTERS_KEY } from 'constants/index';
import { FilteredFieldsType } from 'types/types';

type StorageItemsType = null | FilteredFieldsType;
class DateAsyncStorageProvider {
  static async getMemoizedFilters() {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_FILTERS_KEY);
      return jsonValue !== null ? JSON.parse(jsonValue) : (null as StorageItemsType);
    } catch (e) {
      return null;
    }
  }

  static async setMemoizedFilters(data: FilteredFieldsType) {
    try {
      const JSONValue = JSON.stringify(data);
      await AsyncStorage.setItem(STORAGE_FILTERS_KEY, JSONValue);
      return true;
    } catch (e) {
      return false;
    }
  }
}
export default DateAsyncStorageProvider;
