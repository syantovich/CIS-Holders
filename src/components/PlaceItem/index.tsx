import { Text, View } from 'react-native';
import { PlaceItemProps } from 'components/PlaceItem/types';
import styles from 'components/PlaceItem/styles';

const Index = ({ item }: PlaceItemProps) => {
  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>{item.address}</Text>
    </View>
  );
};
export default Index;
