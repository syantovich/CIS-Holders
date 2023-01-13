import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from 'store/slices/places';
import categoriesReducer from 'store/slices/categories';
import coordinatesReducer from 'store/slices/coordinates';
import modalReducer from 'store/slices/modal';
import filtersReducer from 'store/slices/filters';
import aboutUsInfoReducer from 'store/slices/aboutUsInfo';
import { createRootSaga } from 'store/sagas';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    places: placesReducer,
    categories: categoriesReducer,
    coordinates: coordinatesReducer,
    modal: modalReducer,
    filters: filtersReducer,
    aboutUs: aboutUsInfoReducer
  },
  middleware: [saga]
});

saga.run(createRootSaga());

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
