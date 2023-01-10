import { ActivityIndicator, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import styles from 'components/ImageInput/style';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';
import { ImagePickerEnum } from 'components/ImageInput/types';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/slices/modal';
import db from 'services/Db';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorWrapper from 'components/ErrorWrapper';

const ImageInput = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileName, setFileName] = useState<undefined | string>(undefined);
  const { control, setValue } = useFormContext();

  const dispatch = useDispatch();
  const handleDelete = async () => {
    if (fileName) {
      await db.deleteImage(fileName);
    }
    setFileName(undefined);
    setValue('image.uri', '');
  };
  const handleResponse = async (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorMessage) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else {
      if (response.assets && response.assets[0].uri) {
        try {
          setIsUploading(true);
          const newPath = await db.uploadImage(response.assets[0]);
          if (newPath?.uri) {
            setFileName(newPath.fileName);
            setValue('image.uri', newPath.uri);
          }
          setIsUploading(false);
        } catch (e) {
          setIsUploading(false);
          console.log(e);
        }
      }
    }
  };
  const handleClickOnImage = (image: { uri: string }) => () => {
    if (image && image.uri) {
      dispatch(
        openModal({
          children: (
            <Image
              source={image}
              style={{
                width: Dimensions.get('screen').width - 50,
                height: Dimensions.get('screen').height - 150
              }}
            />
          )
        })
      );
    }
  };
  const handleImagePick = (type: ImagePickerEnum) => async () => {
    try {
      switch (type) {
        case ImagePickerEnum.camera: {
          await launchCamera(
            { mediaType: 'photo', cameraType: 'back', saveToPhotos: true },
            handleResponse
          );
          break;
        }
        case ImagePickerEnum.library: {
          await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 }, handleResponse);
        }
      }
    } catch (e) {
      //
    }
  };
  return (
    <Controller
      control={control}
      name="image"
      render={({ field: { value: image }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error} label="Image">
            {!isUploading ? (
              image.uri && (
                <View style={styles.imageWrapper}>
                  <TouchableOpacity style={styles.image} onPress={handleClickOnImage(image)}>
                    <Image style={styles.image} source={image} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleDelete}
                    style={{ display: 'flex', justifyContent: 'center' }}
                  >
                    <IconsAnt name="delete" color="#000" style={styles.imageSize} />
                  </TouchableOpacity>
                </View>
              )
            ) : (
              <ActivityIndicator size="large" color="#0000ff" />
            )}
            <View style={styles.inputImageWrapper}>
              <View style={styles.fileName}>
                <Text style={styles.fileNameTextStyle}>{fileName || 'Please select file'}</Text>
              </View>
              <View style={styles.icons}>
                <TouchableOpacity onPress={handleImagePick(ImagePickerEnum.camera)}>
                  <IconsEntypo name="camera" style={[styles.fileNameTextStyle, styles.imageSize]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleImagePick(ImagePickerEnum.library)}>
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
