import { call, put, takeEvery } from 'redux-saga/effects';
import { ImagePickerResponse } from 'react-native-image-picker';
import {
  fetchImageFailure,
  getImageUploadFetch,
  getURIImageSuccess
} from 'store/slices/imageUpload';
import { DataProvider } from 'services/DataProvider';

function* workerUploadImageFetch({ payload: response }: { payload: ImagePickerResponse }) {
  if (response.assets && response.assets[0].uri) {
    try {
      const newPath: { uri?: string; fileName?: string } = yield call(
        DataProvider.uploadImage,
        response.assets[0]
      );

      yield put(getURIImageSuccess({ uri: newPath.uri, fileName: newPath.fileName }));
    } catch (e) {
      yield put(fetchImageFailure());
      console.log(e, 4);
    }
  } else {
    yield put(fetchImageFailure());
  }
}

function* ImageUploadSaga() {
  yield takeEvery(getImageUploadFetch, workerUploadImageFetch);
}

export default ImageUploadSaga;
