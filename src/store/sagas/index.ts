import { fork } from 'redux-saga/effects';

import placesSaga from 'store/sagas/places';
import categoriesSaga from 'store/sagas/categories';
import addPlacesSaga from 'store/sagas/addPlaces';
import filterByTypeSaga from 'store/sagas/filterByType';
import checkFiltersInStorageSaga from 'store/sagas/checkFiltersInStorage';
import aboutUsSaga from 'store/sagas/aboutUs';

export function createRootSaga() {
  return function* sagas(): Generator {
    yield fork(placesSaga);
    yield fork(categoriesSaga);
    yield fork(addPlacesSaga);
    yield fork(filterByTypeSaga);
    yield fork(checkFiltersInStorageSaga);
    yield fork(aboutUsSaga);
  };
}
