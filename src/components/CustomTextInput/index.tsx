import { TextInput, TextInputProps } from 'react-native';
import styles from 'components/CustomTextInput/styles';

const CustomTextInput = (props: TextInputProps) => {
  return <TextInput style={styles.textInput} {...props} />;
};
export default CustomTextInput;
