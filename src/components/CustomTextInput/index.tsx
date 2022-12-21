import { TextInput } from 'react-native';
import styles from 'components/CustomTextInput/styles';
import { CustomTextInputProps } from 'components/CustomTextInput/types';
import { useFormContext, Controller, useController } from 'react-hook-form';

const CustomTextInput = (props: CustomTextInputProps) => {
  const { control } = useFormContext();
  // const {}=useController({name:props.nameToControl,control})
  return props.nameToControl ? (
    <Controller
      control={control}
      name={props.nameToControl}
      render={({ field: { value, onChange }, fieldState: { error } }) => {
        return (
          <TextInput
            placeholderTextColor="#fff"
            {...props}
            onChange={props.onChange}
            onChangeText={onChange}
            style={[styles.textInput, props.style]}
          />
        );
      }}
    />
  ) : (
    <TextInput placeholderTextColor="#fff" {...props} style={[styles.textInput, props.style]} />
  );
};
export default CustomTextInput;
