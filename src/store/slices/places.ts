import { createSlice } from '@reduxjs/toolkit';
import { CategoryListType, FilteredFieldsType, IPlaceType } from 'types/types';

type initialStateType = {
  places: CategoryListType[];
  isLoading: boolean;
};
const initialState: initialStateType = {
  places: [],
  isLoading: false
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    getPlacesFetch: (state, actoions: { payload: FilteredFieldsType }) => {
      state.isLoading = true;
    },
    getPlacesSuccess: (state, actions: { payload: CategoryListType[] }) => {
      state.places = actions.payload;
      state.isLoading = false;
    },
    getPlacesFailure: (state) => {
      state.isLoading = false;
    },
    addPlace: (state, actions) => {
      // console.log('add', actions.payload);
    },
    pushOne: (state, actions: { payload: IPlaceType }) => {
      const places = state.places;
      const index = places.findIndex((e) => e.title === actions.payload.type);
      if (index !== -1) {
        places[index].data.push(actions.payload);
      } else {
        places.push({ title: actions.payload.type, data: [actions.payload] });
      }
      state.places = places;
    }
  }
});
export const { getPlacesFetch, getPlacesSuccess, getPlacesFailure, addPlace, pushOne } =
  placesSlice.actions;
export default placesSlice.reducer;
