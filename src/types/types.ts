export interface IPlaceItem {
  name: string;
  description: string;
  image: { uri?: string };
  coordinates: { latitude?: number; longitude?: number };
  type: string;
}
export interface PlaceType extends IPlaceItem {
  id: string;
}
export type CategoryType = {
  name: string;
};
export type CategoryListType = {
  title: string;
  data: PlaceType[];
};
export type CoordinatesType = {
  latitude: number | string;
  longitude: number | string;
};
