import { Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'components/CheckBox';
import { Controller, useFormContext } from 'react-hook-form';
import { DIRECTION_SORT, VALUES_ORDER } from 'constants/index';
import styles from 'components/SortBy/styles';
import IconsFont from 'react-native-vector-icons/FontAwesome';
import { SortByHelperText } from 'components/SortBy/constants';

const SortBy = () => {
  const { control } = useFormContext();

  const handleChangeName = (onChange: (by: VALUES_ORDER) => void) => () => {
    onChange(VALUES_ORDER.NAME);
  };

  const handleChangeDate = (onChange: (by: VALUES_ORDER) => void) => () => {
    onChange(VALUES_ORDER.NAME);
  };
  const handlePressDirection =
    (onChange: (by: DIRECTION_SORT) => void, value: DIRECTION_SORT) => () => {
      if (value === DIRECTION_SORT.ASC) {
        onChange(DIRECTION_SORT.DESC);
      } else {
        onChange(DIRECTION_SORT.ASC);
      }
    };
  return (
    <View style={styles.container}>
      <View>
        <Controller
          control={control}
          name="orderBy.value"
          render={({ field: { value, onChange } }) => (
            <>
              <CheckBox
                isStrict={true}
                isChecked={value === VALUES_ORDER.NAME}
                action={handleChangeName(onChange)}
              >
                <Text>{SortByHelperText.NAME}</Text>
              </CheckBox>
              <CheckBox
                isStrict={true}
                isChecked={value === VALUES_ORDER.DATE}
                action={handleChangeDate(onChange)}
              >
                <Text>{SortByHelperText.DATE}</Text>
              </CheckBox>
            </>
          )}
        />
      </View>
      <View style={styles.wrapperIcon}>
        <Controller
          control={control}
          name="orderBy.direction"
          render={({ field: { value, onChange } }) => (
            <TouchableOpacity onPress={handlePressDirection(onChange, value)}>
              <IconsFont
                name={value === DIRECTION_SORT.ASC ? 'sort-amount-asc' : 'sort-amount-desc'}
                size={25}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default SortBy;
