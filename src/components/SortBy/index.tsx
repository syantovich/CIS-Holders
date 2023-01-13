import { Text, TouchableOpacity, View } from 'react-native';
import CheckBox from 'components/CheckBox';
import { Controller, useFormContext } from 'react-hook-form';
import { DIRECTION_SORT, VALUES_ORDER } from 'constants/index';
import styles from 'components/SortBy/styles';
import IconsFont from 'react-native-vector-icons/FontAwesome';

const SortBy = () => {
  const { control } = useFormContext();

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
                action={() => {
                  onChange(VALUES_ORDER.NAME);
                }}
              >
                <Text>Название места</Text>
              </CheckBox>
              <CheckBox
                isStrict={true}
                isChecked={value === VALUES_ORDER.DATE}
                action={() => {
                  onChange(VALUES_ORDER.DATE);
                }}
              >
                <Text>Дата создания</Text>
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
            <TouchableOpacity
              onPress={() => {
                if (value === DIRECTION_SORT.ASC) {
                  onChange(DIRECTION_SORT.DESC);
                } else {
                  onChange(DIRECTION_SORT.ASC);
                }
              }}
            >
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
