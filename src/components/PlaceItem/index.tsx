import { Image, Text, View } from 'react-native';
import { PlaceItemProps } from 'components/PlaceItem/types';
import styles from 'components/PlaceItem/styles';

const PlaceItem = ({ item }: PlaceItemProps) => {
  return (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      {item.image && item.image.uri && (
        <Image style={{ width: '100%', height: 100 }} source={item.image} />
      )}
      <Text>{item.coordinates.latitude}</Text>
      <Text>{item.coordinates.longitude}</Text>
      <Text>{item.date.toDate().toISOString()}</Text>
    </View>
  );
};
export default PlaceItem;
