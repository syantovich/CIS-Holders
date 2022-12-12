import { call, put, takeEvery } from 'redux-saga/effects';
import db from 'services/Db';
import processingData from 'services/processData';
import { CategoryListType } from 'types/types';
import { getPlacesSuccess } from 'store/slices/places';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

function* workerGetPlacesFetch() {
  const places: FirebaseFirestoreTypes.QuerySnapshot = yield call(db.getPlaces);
  const formattedPlaces: CategoryListType[] = yield processingData.placesByType(places);
  yield put(getPlacesSuccess(formattedPlaces));
}

function* placesSaga() {
  yield takeEvery('places/getPlacesFetch', workerGetPlacesFetch);
}

export default placesSaga;
