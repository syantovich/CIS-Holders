import { TextInput, View } from 'react-native';
import styles from 'components/CustomTextInput/styles';
import { CustomTextInputProps } from 'components/CustomTextInput/types';
import { useFormContext, Controller } from 'react-hook-form';
import ErrorWrapper from 'components/ErrorWrapper';

const CustomTextInput = (props: CustomTextInputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.nameToControl}
      rules={{ required: true }}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <ErrorWrapper error={error} message="This field is required" label={props.label}>
            <View style={styles.wrapperInput}>
              <TextInput
                placeholderTextColor="#fff"
                value={value}
                {...props}
                onChangeText={onChange}
                onChange={props.onChange}
                style={[styles.textInput, props.style]}
              />
            </View>
          </ErrorWrapper>
        );
      }}
    />
  );
};
export default CustomTextInput;
