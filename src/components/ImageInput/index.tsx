import { ActivityIndicator, Image, Text, TouchableOpacity, View } from 'react-native';
import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import styles from 'components/ImageInput/style';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'store/slices/modal';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorWrapper from 'components/ErrorWrapper';
import { DEFAULT_TITLE } from 'components/ImageInput/constants';
import { getImageUploadFetch, removeImageFetch } from 'store/slices/imageUpload';
import { RootStateType } from 'store/index';

const ImageInput = () => {
  const { control, setValue } = useFormContext();
  const { isLoading, fileName, image } = useSelector((state: RootStateType) => state.imageUpload);

  const dispatch = useDispatch();
  const handleDelete = async () => {
    dispatch(removeImageFetch());
  };
  const handleResponse = (response: ImagePickerResponse) => {
    dispatch(getImageUploadFetch(response));
  };
  const handleClickOnImage = (image: { uri?: string }) => () => {
    if (image && image.uri) {
      dispatch(
        openModal({
          children: <Image source={image} style={styles.modalImage} />
        })
      );
    }
  };
  const handlePickImageFromCamera = async () =>
    launchCamera({ mediaType: 'photo', cameraType: 'back', saveToPhotos: true }, handleResponse);
  const handlePickImageFromLibrary = async () =>
    launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, handleResponse);

  useEffect(() => {
    setValue('image', image.uri);
  }, [image.uri, fileName]);

  return (
    <Controller
      control={control}
      name="image"
      render={({ fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error} label="Image">
            {!isLoading ? (
              image.uri && (
                <View style={styles.imageWrapper}>
                  <TouchableOpacity style={styles.image} onPress={handleClickOnImage(image)}>
                    <Image style={styles.image} source={image} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={handleDelete} style={styles.deleteImage}>
                    <IconsAnt name="delete" color="#000" style={styles.imageSize} />
                  </TouchableOpacity>
                </View>
              )
            ) : (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
            <View style={styles.inputImageWrapper}>
              <View style={styles.fileName}>
                <Text style={styles.fileNameTextStyle}>{fileName || DEFAULT_TITLE}</Text>
              </View>
              <View style={styles.icons}>
                <TouchableOpacity onPress={handlePickImageFromCamera}>
                  <IconsEntypo name="camera" style={[styles.fileNameTextStyle, styles.imageSize]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handlePickImageFromLibrary}>
                  <IconsAnt name="picture" style={[styles.fileNameTextStyle, styles.imageSize]} />
                </TouchableOpacity>
              </View>
            </View>
          </ErrorWrapper>
        );
      }}
    />
  );
};
export default ImageInput;
