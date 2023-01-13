import { call, put, takeEvery } from 'redux-saga/effects';
import db from 'services/Db';
import processingData from 'services/processData';
import { FilteredFieldsType } from 'types/types';
import { getPlacesFailure, getPlacesFetch, getPlacesSuccess } from 'store/slices/places';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

function* workerGetPlacesFetch({ payload: filters }: { payload: FilteredFieldsType }) {
  try {
    const places: FirebaseFirestoreTypes.QuerySnapshot = yield call(db.getPlaces, filters);
    const formattedPlaces = processingData.placesByType(places);
    yield put(getPlacesSuccess(formattedPlaces));
  } catch (e) {
    console.log(e);
    yield put(getPlacesFailure());
  }
}

function* placesSaga() {
  yield takeEvery(getPlacesFetch, workerGetPlacesFetch);
}

export default placesSaga;
