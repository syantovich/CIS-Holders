import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from 'store/slices/places';
import categoriesReducer from 'store/slices/categories';
import coordinatesReducer from 'store/slices/coordinates';
import modalReducer from 'store/slices/modal';
import filtersReducer from 'store/slices/filters';
import placesSaga from 'store/sagas/places';
import categoriesSaga from 'store/sagas/categories';
import addPlacesSaga from 'store/sagas/addPlaces';
import filterByTypeSaga from 'store/sagas/filterByType';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    places: placesReducer,
    categories: categoriesReducer,
    coordinates: coordinatesReducer,
    modal: modalReducer,
    filters: filtersReducer
  },
  middleware: [saga]
});

saga.run(placesSaga);
saga.run(categoriesSaga);
saga.run(addPlacesSaga);
saga.run(filterByTypeSaga);

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
