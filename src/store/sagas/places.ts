import { call, put, takeEvery } from 'redux-saga/effects';
import db from 'services/Db';
import processingData from 'services/processData';
import { CategoryListType } from 'types/types';
import {
  getPlacesFailure,
  getPlacesFetch,
  getPlacesFetchActions,
  getPlacesSuccess
} from 'store/slices/places';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

function* workerGetPlacesFetch({ payload }: getPlacesFetchActions) {
  try {
    const places: FirebaseFirestoreTypes.QuerySnapshot = yield call(db.getPlaces, payload);
    const formattedPlaces: CategoryListType[] = yield processingData.placesByType(places);
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
