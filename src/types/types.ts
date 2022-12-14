export type PlaceType = {
  id: string;
  name: string;
  address: string;
  description: string;
  coordinates: { latitude: number; longitude: number };
  type: string;
};
export type CategoryType = {
  name: string;
};
export type CategoryListType = {
  title: string;
  data: PlaceType[];
};
