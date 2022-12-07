import { GroupPlacesProps } from 'components/GroupPlaces/GroupPlaces.types';
import { FlatList, Text, View } from 'react-native';
import { PlaceItem } from 'components/PlaceItem/PlaceItem';

export const GroupPlaces = ({ item }: GroupPlacesProps) => {
  return (
    <View>
      <View>
        <Text>{item[0].type}</Text>
      </View>
      <FlatList data={item} renderItem={PlaceItem} keyExtractor={(item) => item.id} />
    </View>
  );
};
