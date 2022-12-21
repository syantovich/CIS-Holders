import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  TouchableOpacity,
  View
} from 'react-native';
import IconsFont from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from 'store/slices/modal';
import CustomMap from 'components/CustomMap';
import { RootStateType } from 'src/store';
import CustomTextInput from 'components/CustomTextInput';
import styles from 'components/CoordinatePickerInput/style';
import { EnumCoordinates } from 'components/CoordinatePickerInput/types';
import { editSavedCoords } from 'store/slices/coordinates';
import { useFormContext } from 'react-hook-form';
import { CoordinatesType } from 'types/types';

export const CoordinatePickerInput = () => {
  const { textCoordinates, coordinates } = useSelector((state: RootStateType) => state.coordinates);
  const dispatch = useDispatch();
  const { control, setValue } = useFormContext();

  const handleChange =
    (type: EnumCoordinates) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const number = +e.nativeEvent.text;
      const text = e.nativeEvent.text;
      if (
        type === EnumCoordinates.lat &&
        ((number <= 180 && number >= -180) || text === '+' || text === '-' || text === '.')
      ) {
        dispatch(
          editSavedCoords({
            latitude: text,
            longitude: textCoordinates?.longitude || 0
          })
        );
        setValue('coordinates.latitude', number || 0);
      }
      if (
        type === EnumCoordinates.long &&
        ((number < 90 && number > -90) || text === '+' || text === '-' || text === '.')
      ) {
        dispatch(
          editSavedCoords({
            longitude: text,
            latitude: textCoordinates?.latitude || 0
          })
        );
        console.log('set', number);
        setValue('coordinates.longitude', number || 0);
      }
    };
  const handleActionAfterSave = (coords: CoordinatesType) => {
    setValue('coordinates', coords);
  };
  const handlePickCoordinate = () => {
    dispatch(
      openModal({
        children: (
          <View style={{ width: 300, height: 300, marginBottom: 40 }}>
            <CustomMap isChoose={true} actionAfterSave={handleActionAfterSave} />
          </View>
        )
      })
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapperInputs}>
        <CustomTextInput
          onChange={handleChange(EnumCoordinates.long)}
          style={styles.input}
          value={`${textCoordinates?.longitude || ''}`}
        />
        <CustomTextInput
          onChange={handleChange(EnumCoordinates.lat)}
          value={`${textCoordinates?.latitude || ''}`}
        />
      </View>
      <TouchableOpacity style={styles.wrapperIcon} onPress={handlePickCoordinate}>
        <IconsFont name="map-marker" size={30} style={styles.colorIcon} />
      </TouchableOpacity>
    </View>
  );
};
