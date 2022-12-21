import { createSlice } from '@reduxjs/toolkit';
import { CoordinatesType } from 'types/types';

type initialStateType = {
  isMapOpen: boolean;
  coordinatesSaved: CoordinatesType | null;
  textCoordinates: CoordinatesType | null;
  coordinates: CoordinatesType | null;
};
type coordinatesActionType = { payload: CoordinatesType };
type setIsMapOpenActionType = {
  payload: boolean;
};
const initialState: initialStateType = {
  textCoordinates: null,
  isMapOpen: false,
  coordinates: null,
  coordinatesSaved: null
};

const coordinatesSlice = createSlice({
  name: 'coordinates',
  initialState,
  reducers: {
    setIsMapOpen(state, action: setIsMapOpenActionType) {
      state.isMapOpen = action.payload;
      state.coordinates = null;
    },
    pickCoordinates(state, action: coordinatesActionType) {
      state.coordinates = action.payload;
    },
    saveCoords(state) {
      state.coordinatesSaved = state.coordinates;
      state.textCoordinates = state.coordinates;
    },
    editSavedCoords(state, action: coordinatesActionType) {
      state.coordinatesSaved = {
        longitude: +action.payload.longitude || 0,
        latitude: +action.payload.latitude || 0
      };
      state.coordinates = state.coordinatesSaved = {
        longitude: +action.payload.longitude || 0,
        latitude: +action.payload.latitude || 0
      };

      state.textCoordinates = action.payload;
    }
  }
});
export const { setIsMapOpen, pickCoordinates, saveCoords, editSavedCoords } =
  coordinatesSlice.actions;
export default coordinatesSlice.reducer;
