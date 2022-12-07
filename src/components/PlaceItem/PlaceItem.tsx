import { Text, View } from 'react-native';
import { PlaceItemProps } from 'components/PlaceItem/PlaceItem.types';

export const PlaceItem = ({ item }: PlaceItemProps) => {
  return (
    <View>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.address}</Text>
      </View>
    </View>
  );
};
