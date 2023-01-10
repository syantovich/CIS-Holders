import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from 'store/slices/places';
import categoriesReducer from 'store/slices/categories';
import coordinatesReducer from 'store/slices/coordinates';
import modalReducer from 'store/slices/modal';
import placesSaga from 'store/sagas/places';
import categoriesSaga from 'store/sagas/categories';
import addPlacesSaga from 'store/sagas/addPlaces';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    places: placesReducer,
    categories: categoriesReducer,
    coordinates: coordinatesReducer,
    modal: modalReducer
  },
  middleware: [saga]
});

saga.run(placesSaga);
saga.run(categoriesSaga);
saga.run(addPlacesSaga);

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
