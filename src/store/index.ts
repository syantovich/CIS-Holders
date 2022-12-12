import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import placesReducer from 'store/slices/places';
import categoriesReducer from 'store/slices/categories';
import placesSaga from 'store/sagas/places';
import categoriesSaga from 'store/sagas/categories';

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: { places: placesReducer, categories: categoriesReducer },
  middleware: [saga]
});
saga.run(placesSaga);
saga.run(categoriesSaga);

export type RootStateType = ReturnType<typeof store.getState>;
export default store;
