import { put, takeEvery, select, call } from 'redux-saga/effects';
import { DataProvider } from 'services/DataProvider';
import {
  fetchImageFailure,
  removedImageSuccess,
  removeImageFetch,
  stateImageUploadType
} from 'store/slices/imageUpload';
import { RootStateType } from 'store/index';

function* workerRemoveImageFetch() {
  const { fileName }: stateImageUploadType = yield select(
    (state: RootStateType) => state.imageUpload
  );
  if (fileName) {
    yield call(DataProvider.deleteImage, fileName);
    yield put(removedImageSuccess());
    return;
  } else {
    yield put(fetchImageFailure());
  }
}

function* ImageDeleteSaga() {
  yield takeEvery(removeImageFetch, workerRemoveImageFetch);
}

export default ImageDeleteSaga;
