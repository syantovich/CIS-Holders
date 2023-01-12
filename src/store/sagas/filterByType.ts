import { put, takeEvery } from 'redux-saga/effects';
import { getPlacesFetch } from 'store/slices/places';
import { setFilters, setFiltersActions } from 'store/slices/filters';

function* workerUpdatePlaces({ payload }: setFiltersActions) {
  yield put(getPlacesFetch(payload));
}

function* filterByTypeSaga() {
  yield takeEvery(setFilters, workerUpdatePlaces);
}

export default filterByTypeSaga;
