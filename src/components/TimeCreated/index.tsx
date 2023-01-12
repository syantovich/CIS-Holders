import { Text, TouchableOpacity, View } from 'react-native';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
import { useState } from 'react';
import styles from 'components/TimeCreated/styles';

const TimeCreated = () => {
  const { control, getValues } = useFormContext();
  const [isMinOpen, setIsMinOpen] = useState(false);
  const [isMaxOpen, setIsMaxOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text>Min</Text>
        <Controller
          control={control}
          name="date.min"
          render={({ field: { value, onChange } }) => (
            <>
              <TouchableOpacity
                style={styles.dateWrapper}
                onPress={() => {
                  setIsMinOpen(true);
                }}
              >
                <Text>{value ? new Date(value).toISOString().slice(0, 10) : 'Pick date'}</Text>
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                maximumDate={getValues('date.max')}
                date={value ? value : new Date()}
                open={isMinOpen}
                onConfirm={(date) => {
                  onChange(date);
                  setIsMinOpen(false);
                }}
                onCancel={() => setIsMinOpen(false)}
              />
            </>
          )}
        />
      </View>
      <View style={styles.dateContainer}>
        <Text>Max</Text>
        <Controller
          control={control}
          name="date.max"
          render={({ field: { value, onChange } }) => (
            <>
              <TouchableOpacity
                style={styles.dateWrapper}
                onPress={() => {
                  setIsMaxOpen(true);
                }}
              >
                <Text>{value ? new Date(value).toISOString().slice(0, 10) : 'Pick date'}</Text>
              </TouchableOpacity>
              <DatePicker
                mode="date"
                modal
                minimumDate={getValues('date.min')}
                date={value ? value : new Date()}
                open={isMaxOpen}
                onConfirm={(date) => {
                  onChange(date);
                  setIsMaxOpen(false);
                }}
                onCancel={() => setIsMaxOpen(false)}
              />
            </>
          )}
        />
      </View>
    </View>
  );
};

export default TimeCreated;
