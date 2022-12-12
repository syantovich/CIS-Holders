import { useState } from 'react';
import { DropPickerProps } from 'components/DropDownPicker/types';
import { styles } from 'components/DropDownPicker/styles';
import { ActivityIndicator, FlatList, Text, TouchableHighlight, View } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';

export const DropPicker = <T,>({
  items,
  isLoading,
  renderItem,
  renderValue,
  renderKey,
  title,
  helpedText
}: DropPickerProps<T>) => {
  const showValue = (item: T) => (renderValue ? renderValue(item) : item);
  const showItem = (item: T) => (renderItem ? renderItem(item) : item);
  const showKey = (item: T) => (renderKey ? renderKey(item) : item);
  const showHelpedText = helpedText || 'Need to select';
  const [value, setValue] = useState<string | null | number | T>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenList = (newOpen?: boolean) => () => {
    const valueToSet = newOpen === undefined ? !isOpen : newOpen;
    setIsOpen(valueToSet);
  };

  const handleSetValue = (item: T | string | number) => () => {
    setValue(item);
    setIsOpen(false);
  };

  return (
    <View style={{ flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
      <TouchableHighlight
        style={[styles.pickerItemWrapper, styles.pickerItemWrapperBackground]}
        onPress={handleOpenList()}
      >
        <View
          style={[
            styles.pickerContainer,
            styles.pickerItemWrapper,
            styles.pickerItemWrapperBackground
          ]}
        >
          <View>
            <Text style={styles.pickerItemColor}>{value ? `${value}` : showHelpedText}</Text>
          </View>
          <IconEntypo name="select-arrows" size={15} color="#ffffff" />
        </View>
      </TouchableHighlight>
      {isOpen &&
        (!items.length ? (
          <View style={[styles.list, styles.loading, styles.pickerItemWrapperBackground]}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Text>No fields to select</Text>
            )}
          </View>
        ) : (
          <FlatList
            data={items}
            style={styles.list}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={[styles.pickerItemWrapper, styles.pickerItemWrapperBackground]}
                onPress={handleSetValue(showValue(item))}
              >
                <Text style={[styles.pickerItemColor, styles.paddingItem]}>
                  {renderItem ? renderItem(item) : `${item}`}
                </Text>
              </TouchableHighlight>
            )}
          />
        ))}
    </View>
  );
};
