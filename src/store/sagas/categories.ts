import { call, put, takeEvery } from 'redux-saga/effects';
import db from 'services/Db';
import processingData from 'services/processData';
import { CategoryListType } from 'types/types';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { getCategoriesSuccess } from 'store/slices/categories';

function* workerGetCategoriesFetch() {
  const categories: FirebaseFirestoreTypes.QuerySnapshot = yield call(db.getCategories);
  const formattedCategories: CategoryListType[] = yield processingData.getArrayCategoriesByName(
    categories
  );
  yield put(getCategoriesSuccess(formattedCategories));
}

function* placesSaga() {
  yield takeEvery('categories/getCategoriesFetch', workerGetCategoriesFetch);
}

export default placesSaga;
