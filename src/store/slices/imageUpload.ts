import { createSlice } from '@reduxjs/toolkit';
import { ImagePickerResponse } from 'react-native-image-picker';

export type stateImageUploadType = {
  fileName?: string;
  image: { uri: string };
  isLoading: boolean;
};
const initialState: stateImageUploadType = {
  fileName: undefined,
  image: { uri: '' },
  isLoading: false
};

const imagePickSlice = createSlice({
  name: 'imageUpload',
  initialState,
  reducers: {
    getImageUploadFetch: (state, actoions: { payload: ImagePickerResponse }) => {
      state.isLoading = true;
    },
    removeImageFetch: (state) => {
      state.isLoading = true;
    },
    removedImageSuccess: (state) => {
      state.fileName = undefined;
      state.image = { uri: '' };
      state.isLoading = false;
    },
    getURIImageSuccess: (state, actions: { payload: { uri: string; fileName?: string } }) => {
      state.fileName = actions.payload.fileName;
      state.image = { uri: actions.payload.uri };
      state.isLoading = false;
    },
    fetchImageFailure: (state) => {
      state.isLoading = false;
    }
  }
});
export const {
  getImageUploadFetch,
  removedImageSuccess,
  removeImageFetch,
  fetchImageFailure,
  getURIImageSuccess
} = imagePickSlice.actions;
export default imagePickSlice.reducer;
