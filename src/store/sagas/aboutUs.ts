import { call, put, takeEvery } from 'redux-saga/effects';
import db from 'services/Db';
import processingData from 'services/processData';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { getAboutFailure, getAboutFetch, getAboutSuccess } from 'store/slices/aboutUsInfo';

function* workerGetSlidersFetch() {
  try {
    const infos: FirebaseFirestoreTypes.QuerySnapshot = yield call(db.getAboutUsInfo);
    const formattedSliders = processingData.getAboutUsArray(infos);
    yield put(getAboutSuccess(formattedSliders));
  } catch (e) {
    console.log(e);
    yield put(getAboutFailure());
  }
}

function* aboutUsSaga() {
  yield takeEvery(getAboutFetch, workerGetSlidersFetch);
}

export default aboutUsSaga;
