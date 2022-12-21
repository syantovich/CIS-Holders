import { useState } from 'react';
import { DropPickerProps } from 'components/DropDownPicker/types';
import { styles } from 'components/DropDownPicker/styles';
import { ActivityIndicator, FlatList, Modal, Text, TouchableHighlight, View } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { ModalOpacity } from 'components/ModalOpacity';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from 'store/slices/modal';
import { DropDownOptions } from 'components/DropDownOptions';
import { useFormContext } from 'react-hook-form';

export const DropPicker = <T,>({
  items,
  isLoading,
  renderItem,
  renderValue,
  renderKey,
  title,
  helpedText
}: DropPickerProps<T>) => {
  const showHelpedText = helpedText || 'Need to select';
  const [value, setValue] = useState<string | null | number | T>(null);
  const dispatch = useDispatch();
  const { setValue: setFormValue } = useFormContext();
  const handleSetValue = (item: T | number | string) => {
    setValue(item);
    setFormValue('type', item);
  };

  const handleOpenList = () => {
    const children = (
      <DropDownOptions
        items={items}
        isLoading={isLoading}
        setValue={handleSetValue}
        renderItem={renderItem}
        renderKey={renderKey}
        renderValue={renderValue}
      />
    );

    dispatch(openModal({ children }));
  };

  return (
    <View style={{ flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}>
      <TouchableHighlight
        style={[styles.pickerItemWrapper, styles.pickerItemWrapperBackground]}
        onPress={handleOpenList}
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
    </View>
  );
};
