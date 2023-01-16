import { call, put, takeEvery } from 'redux-saga/effects';
import { addPlace, getPlacesFetch } from 'store/slices/places';
import { IPlaceItem } from 'types/types';
import { DataProvider } from 'services/DataProvider';

function* workerAddPlacesFetch({ payload: item }: { payload: IPlaceItem }) {
  yield call(DataProvider.addItem, item);
  yield put(getPlacesFetch());
}

function* addPlacesSaga() {
  yield takeEvery(addPlace, workerAddPlacesFetch);
}

export default addPlacesSaga;
