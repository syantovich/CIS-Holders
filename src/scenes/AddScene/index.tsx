import { View, Text } from 'react-native';
import { FormForAdding } from 'components/FormForAdding';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add Screen</Text>
      <FormForAdding />
    </View>
  );
}
export default DetailsScreen;
