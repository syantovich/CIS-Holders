import { createSlice } from '@reduxjs/toolkit';
import { CategoryListType } from 'types/types';
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
    getPlacesFetch: (state) => {
      state.isLoading = true;
    },
    getPlacesSuccess: (state, actions) => {
      state.places = actions.payload;
      state.isLoading = false;
    },
    getPlacesFailure: (state) => {
      state.isLoading = false;
    }
  }
});
export const { getPlacesFetch, getPlacesSuccess, getPlacesFailure } = placesSlice.actions;
export default placesSlice.reducer;
