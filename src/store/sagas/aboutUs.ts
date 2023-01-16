import { call, put, takeEvery } from 'redux-saga/effects';
import { ProcessDataMappers } from '../../utils/mappers/processData';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { getAboutFailure, getAboutFetch, getAboutSuccess } from 'store/slices/aboutUsInfo';
import RNBootSplash from 'react-native-bootsplash';
import { DataProvider } from 'services/DataProvider';

function* workerGetSlidersFetch() {
  try {
    const infos: FirebaseFirestoreTypes.QuerySnapshot = yield call(DataProvider.getAboutUsInfo);
    yield put(getAboutSuccess(ProcessDataMappers.getAboutUsArray(infos)));
    yield RNBootSplash.hide({ fade: true, duration: 500 });
  } catch (e) {
    console.log(e);
    yield put(getAboutFailure());
  }
}

function* aboutUsSaga() {
  yield takeEvery(getAboutFetch, workerGetSlidersFetch);
}

export default aboutUsSaga;
