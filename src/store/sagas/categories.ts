import { call, put, takeEvery } from 'redux-saga/effects';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { getCategoriesSuccess } from 'store/slices/categories';
import { DataProvider } from 'services/DataProvider';
import { ProcessDataMappers } from '../../utils/mappers/processData';

function* workerGetCategoriesFetch() {
  const categories: FirebaseFirestoreTypes.QuerySnapshot = yield call(DataProvider.getCategories);
  yield put(getCategoriesSuccess(ProcessDataMappers.getArrayCategoriesByName(categories)));
}

function* placesSaga() {
  yield takeEvery('categories/getCategoriesFetch', workerGetCategoriesFetch);
}

export default placesSaga;
