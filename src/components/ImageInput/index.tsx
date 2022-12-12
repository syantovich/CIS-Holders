import { Image, Text, TouchableOpacity, View } from 'react-native';
import IconsEntypo from 'react-native-vector-icons/Entypo';
import IconsAnt from 'react-native-vector-icons/AntDesign';
import styles from 'components/ImageInput/style';
import { ImagePickerResponse, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';
import { ImagePickerEnum } from 'components/ImageInput/types';

const ImageInput = () => {
  const [image, setImage] = useState<{ uri?: string }>({});
  const [fileName, setFileName] = useState<undefined | string>(undefined);

  const handleResponse = (response: ImagePickerResponse) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorMessage) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else {
      if (response.assets) {
        const source = { uri: response.assets[0].uri };
        setFileName(source.uri?.substring(source.uri.lastIndexOf('/') + 1));
        console.log(source);
        setImage(source);
      }
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
    <>
      {image.uri && <Image style={styles.image} source={image} />}
      <View style={styles.inputImageWrapper}>
        <View style={styles.fileName}>
          <Text>{fileName || 'Please select file'}</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={handleImagePick(ImagePickerEnum.camera)}>
            <IconsEntypo name="camera" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleImagePick(ImagePickerEnum.library)}>
            <IconsAnt name="picture" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default ImageInput;
