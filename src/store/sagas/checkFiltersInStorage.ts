import { put, takeEvery, call } from 'redux-saga/effects';
import { getPlacesFetch } from 'store/slices/places';
import { checkFilters, setFilters, setFiltersActions } from 'store/slices/filters';
import DateAsyncStorageProvider from 'services/DateAsyncStorageProvider';
import { getCategoriesFetch } from 'store/slices/categories';
import { FilteredFieldsType } from 'types/types';
import { getAboutFetch } from 'store/slices/aboutUsInfo';
import SplashScreen from 'react-native-splash-screen';

function* workerCheckFilters({ payload: filters }: setFiltersActions) {
  const filtersStorage: null | FilteredFieldsType = yield call(
    DateAsyncStorageProvider.getMemoizedFilters
  );
  if (filtersStorage) {
    yield put(setFilters(filtersStorage));
  } else {
    yield put(getPlacesFetch(filters));
  }
  yield put(getAboutFetch());
  yield put(getCategoriesFetch());
  SplashScreen.hide();
}

function* checkFiltersInStorageSaga() {
  yield takeEvery(checkFilters, workerCheckFilters);
}

export default checkFiltersInStorageSaga;
