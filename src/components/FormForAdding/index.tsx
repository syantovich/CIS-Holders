import CustomTextInput from 'components/CustomTextInput';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/store';
import { DropPicker } from 'components/DropDownPicker';
import ImageInput from 'components/ImageInput';
import { CoordinatePickerInput } from 'components/CoordinatePickerInput';
import { Button, View } from 'react-native';
import styles from 'components/FormForAdding/styles';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';

export const FormForAdding = () => {
  const { categories, isLoading } = useSelector((state: RootStateType) => state.categories);
  const defaultValues = {
    coordinates: { latitude: 0, longitude: 0 },
    descr: '',
    description: '',
    name: ''
  };
  const methods = useForm({ defaultValues });
  const handleSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <View style={styles.wrapperForm}>
        <View style={styles.item}>
          <CustomTextInput placeholder="Name of the place" maxLength={100} nameToControl="name" />
        </View>

        <View style={styles.item}>
          <CustomTextInput
            placeholder="Description"
            nameToControl="description"
            maxLength={500}
            numberOfLines={4}
          />
        </View>

        <View style={styles.item}>
          <CustomTextInput placeholder="Name of the place" nameToControl="descr" />
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
    </FormProvider>
  );
};
