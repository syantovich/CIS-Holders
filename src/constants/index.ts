export enum DIRECTION_SORT {
  ASC = 'asc',
  DESC = 'desc'
}
export enum VALUES_ORDER {
  NAME = 'name',
  DATE = 'date'
}
export const STORAGE_FILTERS_KEY = '@CIS_Holders_filters';
export enum COLLECTIONS_NAME {
  PLACES = 'places',
  CATEGORY = 'categories',
  ABOUT = 'about'
}
export const STORAGE_PATHS = {
  places: (fileName: string | undefined) => {
    if (!fileName) {
      throw new Error();
    }
    return `/placeimage/${fileName}`;
  }
};
