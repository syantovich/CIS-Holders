import { createSlice } from '@reduxjs/toolkit';
import { ISlideInfo } from 'types/types';

type initialStateType = {
  sliders: ISlideInfo[];
  isLoading: boolean;
};
const initialState: initialStateType = {
  sliders: [],
  isLoading: false
};

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {
    getAboutFetch: (state) => {
      state.isLoading = true;
    },
    getAboutSuccess: (state, actions: { payload: ISlideInfo[] }) => {
      state.sliders = actions.payload;
      state.isLoading = false;
    },
    getAboutFailure: (state) => {
      state.isLoading = false;
    }
  }
});
export const { getAboutFailure, getAboutFetch, getAboutSuccess } = aboutUsSlice.actions;
export default aboutUsSlice.reducer;
