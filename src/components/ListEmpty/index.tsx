import { Text, View } from 'react-native';
import styles from 'components/ListEmpty/styles';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text>List is empty</Text>
    </View>
  );
};

export default ListEmpty;
