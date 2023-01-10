import { ErrorWrapperProps } from 'components/ErrorWrapper/type';
import { Text, View } from 'react-native';
import styles from 'components/ErrorWrapper/style';

const ErrorWrapper = ({ children, error, message, label }: ErrorWrapperProps) => {
  // const style = [styles.errorMessage, !error && styles.withoutError];

  return (
    <>
      <View style={styles.errorWrapper}>
        <Text>{label}</Text>
        {children}
      </View>
      {error && <Text style={styles.errorMessage}>{message}</Text>}
    </>
  );
};

export default ErrorWrapper;
