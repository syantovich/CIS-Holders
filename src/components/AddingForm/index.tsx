import CustomTextInput from 'components/CustomTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'store/index';
import { DropPicker } from 'components/DropDownPicker';
import ImageInput from 'components/ImageInput';
import { CoordinatePickerInput } from 'components/CoordinatePickerInput';
import { Button, ScrollView, View } from 'react-native';
import styles from 'components/AddingForm/styles';
import { useForm, FormProvider } from 'react-hook-form';
import { resetCoords } from 'store/slices/coordinates';
import { addPlace } from 'store/slices/places';
import { IPlaceItem } from 'types/types';
import { FormStateType } from 'components/AddingForm/types';
import { removedImageSuccess } from 'store/slices/imageUpload';

const AddingForm = () => {
  const { categories, isLoading } = useSelector((state: RootStateType) => state.categories);

  const defaultValues: FormStateType = {
    coordinates: { latitude: undefined, longitude: undefined },
    image: { uri: '' },
    type: '',
    description: '',
    name: ''
  };
  const dispatch = useDispatch();
  const methods = useForm({ defaultValues });
  const clearForm = () => {
    methods.reset();
    dispatch(resetCoords());
    dispatch(removedImageSuccess());
  };
  const handleSubmit = (data: FormStateType) => {
    if (data.coordinates.latitude && data.coordinates.longitude) {
      const addedPlace: IPlaceItem = {
        ...data,
        coordinates: { latitude: data.coordinates.latitude, longitude: data.coordinates.longitude }
      };
      dispatch(addPlace(addedPlace));
      clearForm();
    }
  };
  return (
    <FormProvider {...methods}>
      <ScrollView>
        <View style={styles.wrapperForm}>
          <View style={styles.item}>
            <CustomTextInput maxLength={100} nameToControl="name" label="Name" />
          </View>

          <View style={styles.item}>
            <CustomTextInput
              label="Description"
              nameToControl="description"
              maxLength={500}
              numberOfLines={4}
            />
          </View>
          <View style={styles.item}>
            <DropPicker items={categories} isLoading={isLoading} />
          </View>
          <View style={styles.item}>
            <ImageInput />
          </View>
          <View style={styles.item}>
            <CoordinatePickerInput />
          </View>
        </View>
        <Button title={'Submit'} onPress={methods.handleSubmit(handleSubmit)} />
      </ScrollView>
    </FormProvider>
  );
};
export default AddingForm;
