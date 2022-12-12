export type PlaceType = {
  id: string;
  name: string;
  address: string;
  description: string;
  type: string;
};
export type CategoryType = {
  name: string;
};
export type CategoryListType = {
  title: string;
  data: PlaceType[];
};
