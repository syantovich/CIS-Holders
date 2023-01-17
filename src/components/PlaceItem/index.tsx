import { Text, TouchableOpacity } from 'react-native';
import { PlaceItemProps } from 'components/PlaceItem/types';
import styles from 'components/PlaceItem/styles';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/slices/modal';
import PlaceInfoModal from 'components/PlaceInfoModal';

const PlaceItem = ({ item }: PlaceItemProps) => {
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(openModal({ children: <PlaceInfoModal place={item} /> }));
  };
  return (
    <TouchableOpacity style={styles.item} onPress={handlePress}>
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );
};
export default PlaceItem;
