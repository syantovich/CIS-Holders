import { useCallback } from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import styles from 'components/ChooseType/styles';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/store';
import CheckBox from 'components/CheckBox';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ChooseType = () => {
  const { isLoading, categories } = useSelector((state: RootStateType) => state.categories);
  const { control, getValues } = useFormContext();
  const { append, remove, fields } = useFieldArray({
    control,
    name: 'arrayToFilter'
  });

  const handleToAdd = useCallback(
    (type: string) => () => {
      const fields = getValues('arrayToFilter') as string[];
      let isRemoved = false;
      for (let i = 0; i < fields.length; i++) {
        if (fields[i] === type) {
          isRemoved = true;
          remove(i);
          break;
        }
      }
      if (!isRemoved) {
        append(type);
      }
    },
    [fields]
  );

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CheckBox action={handleToAdd(item)} isChecked={getValues('arrayToFilter').includes(item)}>
          <Text style={styles.textItem}>{item}</Text>
        </CheckBox>
      )}
    />
  );
};

export default ChooseType;
