import { View } from 'react-native';
import AddingForm from 'components/AddingForm';
import styles from 'scenes/AddScene/styles';

function DetailsScreen() {
  return (
    <View style={styles.container}>
      <AddingForm />
    </View>
  );
}
export default DetailsScreen;
