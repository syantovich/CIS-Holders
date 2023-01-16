import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getPlacesFailure, getPlacesFetch, getPlacesSuccess } from 'store/slices/places';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { FiltersStateType } from 'store/slices/filters';
import { RootStateType } from 'store/index';
import { DataProvider } from 'services/DataProvider';
import { ProcessDataMappers } from '../../utils/mappers/processData';

function* workerGetPlacesFetch() {
  try {
    const filters: FiltersStateType = yield select((state: RootStateType) => state.filters);
    const places: FirebaseFirestoreTypes.QuerySnapshot = yield call(
      DataProvider.getPlaces,
      filters
    );
    yield put(getPlacesSuccess(ProcessDataMappers.placesByType(places)));
  } catch (e) {
    console.log(e);
    yield put(getPlacesFailure());
  }
}

function* placesSaga() {
  yield takeEvery(getPlacesFetch, workerGetPlacesFetch);
}

export default placesSaga;
