import { call, put, takeEvery } from 'redux-saga/effects';
import db from 'services/Db';
import { FilteredFieldsType, IPlaceItem } from 'types/types';
import { getPlacesFetch } from 'store/slices/places';

function* workerAddPlacesFetch({
  payload: { item, filters }
}: {
  payload: { item: IPlaceItem; filters: FilteredFieldsType };
  type: string;
}) {
  yield call(db.addItem, item);
  yield put(getPlacesFetch(filters));
}

function* addPlacesSaga() {
  yield takeEvery('places/addPlace', workerAddPlacesFetch);
}

export default addPlacesSaga;
