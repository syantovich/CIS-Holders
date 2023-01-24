import { put, takeEvery, call } from 'redux-saga/effects';
import { getPlacesFetch } from 'store/slices/places';
import { checkFilters, setFilters } from 'store/slices/filters';
import DateAsyncStorageProvider from 'services/DateAsyncStorageProvider';
import { getCategoriesFetch } from 'store/slices/categories';
import { FilteredFieldsType } from 'types/types';
import { getAboutFetch } from 'store/slices/aboutUsInfo';
import RNBootSplash from 'react-native-bootsplash';

function* workerCheckFilters() {
  const filtersStorage: null | FilteredFieldsType = yield call(
    DateAsyncStorageProvider.getMemoizedFilters
  );
  yield RNBootSplash.hide({ fade: true, duration: 500 });
  if (filtersStorage) {
    yield put(setFilters(filtersStorage));
  } else {
    yield put(getPlacesFetch());
  }
  yield put(getAboutFetch());
  yield put(getCategoriesFetch());
}

function* checkFiltersInStorageSaga() {
  yield takeEvery(checkFilters, workerCheckFilters);
}

export default checkFiltersInStorageSaga;
