import { createSlice } from '@reduxjs/toolkit';

type initialStateType = {
  categories: string[];
  isLoading: boolean;
};
const initialState: initialStateType = {
  categories: [],
  isLoading: false
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoriesFetch: (state) => {
      state.isLoading = true;
    },
    getCategoriesSuccess: (state, actions) => {
      state.categories = actions.payload;
      state.isLoading = false;
    },
    getCategoriesFailure: (state) => {
      state.isLoading = false;
    }
  }
});
export const { getCategoriesFailure, getCategoriesFetch, getCategoriesSuccess } =
  categoriesSlice.actions;
export default categoriesSlice.reducer;
