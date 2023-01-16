import { put, takeEvery } from 'redux-saga/effects';
import { getPlacesFetch } from 'store/slices/places';
import { setFilters, setFiltersActions } from 'store/slices/filters';
import DateAsyncStorageProvider from 'services/DateAsyncStorageProvider';

function* workerUpdatePlaces({ payload: filters }: setFiltersActions) {
  yield DateAsyncStorageProvider.setMemoizedFilters(filters);
  yield put(getPlacesFetch());
}

function* filterByTypeSaga() {
  yield takeEvery(setFilters, workerUpdatePlaces);
}

export default filterByTypeSaga;
