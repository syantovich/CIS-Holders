import { ActivityIndicator, FlatList, Text, TouchableHighlight, View } from 'react-native';
import { styles } from 'components/DropDownPicker/styles';
import { DropDownOptionsProps } from 'components/DropDownOptions/types';
import { useDispatch } from 'react-redux';
import { closeModal } from 'store/slices/modal';

export const DropDownOptions = <T,>({
  items,
  isLoading,
  renderItem,
  renderValue,
  renderKey,
  setValue
}: DropDownOptionsProps<T>) => {
  const showValue = (item: T) => (renderValue ? renderValue(item) : item);
  const showItem = (item: T) =>
    renderItem ? (
      renderItem(item)
    ) : (
      <Text style={[styles.pickerItemColor, styles.paddingItem]}>{`${item}`}</Text>
    );
  const showKey = (item: T) => (renderKey ? renderKey(item) : item);

  const dispatch = useDispatch();
  const handleSetValue = (item: T | string | number) => () => {
    setValue(item);
    dispatch(closeModal());
  };
  return !items.length ? (
    <View style={[styles.list, styles.loading, styles.pickerItemWrapperBackground]}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Text>No fields to select</Text>
      )}
    </View>
  ) : (
    <View style={styles.list}>
      <FlatList
        data={items}
        style={styles.list}
        renderItem={({ item }) => (
          <TouchableHighlight
            style={[styles.pickerItemWrapper, styles.pickerItemWrapperBackground]}
            onPress={handleSetValue(showValue(item))}
          >
            {showItem(item)}
          </TouchableHighlight>
        )}
      />
    </View>
  );
};
