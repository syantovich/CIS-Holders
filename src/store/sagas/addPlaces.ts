import { call, put, takeEvery } from 'redux-saga/effects';
import db from 'services/Db';
import { IPlaceItem, IPlaceType } from 'types/types';
import { pushOne } from 'store/slices/places';

function* workerAddPlacesFetch({ payload: item }: { payload: IPlaceItem; type: string }) {
  const place: IPlaceType = yield call(db.addItem, item);
  yield put(pushOne(place));
}

function* addPlacesSaga() {
  yield takeEvery('places/addPlace', workerAddPlacesFetch);
}

export default addPlacesSaga;
