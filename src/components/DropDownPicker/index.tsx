import { DropPickerProps } from 'components/DropDownPicker/types';
import { styles } from 'components/DropDownPicker/styles';
import { Text, TouchableHighlight, View } from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { openModal } from 'store/slices/modal';
import { DropDownOptions } from 'components/DropDownOptions';
import { Controller, useFormContext } from 'react-hook-form';
import ErrorWrapper from 'components/ErrorWrapper';

export const DropPicker = <T,>({
  items,
  isLoading,
  renderItem,
  renderValue,
  renderKey,
  helpedText
}: DropPickerProps<T>) => {
  const showHelpedText = helpedText || 'Need to select';
  const dispatch = useDispatch();
  const { setValue: setFormValue, control } = useFormContext();
  const handleSetValue = (item: T | number | string) => {
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
    <Controller
      control={control}
      name="type"
      rules={{ required: true }}
      render={({ field: { value: type }, fieldState: { error } }) => {
        return (
          <View
            style={{ flexDirection: 'column', justifyContent: 'flex-end', position: 'relative' }}
          >
            <ErrorWrapper error={error && !type} message="This field is required" label="Type">
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
                    <Text style={styles.pickerItemColor}>{type ? `${type}` : showHelpedText}</Text>
                  </View>
                  <IconEntypo name="select-arrows" size={15} color="#ffffff" />
                </View>
              </TouchableHighlight>
            </ErrorWrapper>
          </View>
        );
      }}
    />
  );
};
