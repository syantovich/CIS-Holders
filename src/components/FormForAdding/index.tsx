import CustomTextInput from 'components/CustomTextInput';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/store';
import { DropPicker } from 'components/DropDownPicker';
import ImageInput from 'components/ImageInput';
import { CoordinatePickerInput } from 'components/CoordinatePickerInput';
import { Button, ScrollView, View } from 'react-native';
import styles from 'components/FormForAdding/styles';
import { useForm, FormProvider } from 'react-hook-form';
import { IPlaceItem } from 'types/types';
import db from 'services/Db';
import { resetCoords } from 'store/slices/coordinates';
import { addPlace } from 'store/slices/places';

export const FormForAdding = () => {
  const { categories, isLoading } = useSelector((state: RootStateType) => state.categories);
  const defaultValues: IPlaceItem = {
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
  };
  const handleSubmit = (data: IPlaceItem) => {
    console.log(data);
    dispatch(addPlace(data));
    clearForm();
  };
  return (
    <FormProvider {...methods}>
      <ScrollView>
        <View style={styles.wrapperForm}>
          <View style={styles.item}>
            <CustomTextInput
              placeholder="Name of the place"
              maxLength={100}
              nameToControl="name"
              label="Name"
            />
          </View>

          <View style={styles.item}>
            <CustomTextInput
              label="Description"
              placeholder="Description"
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
        <Button title={'submit'} onPress={methods.handleSubmit(handleSubmit)} />
      </ScrollView>
    </FormProvider>
  );
};
