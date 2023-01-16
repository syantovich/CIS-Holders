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
import { RootStateType } from 'store/index';
import CustomTextInput from 'components/CustomTextInput';
import styles from 'components/CoordinatePickerInput/style';
import { EnumCoordinates } from 'components/CoordinatePickerInput/types';
import { editSavedCoords } from 'store/slices/coordinates';
import { useFormContext } from 'react-hook-form';
import { CoordinatesType } from 'types/types';

export const CoordinatePickerInput = () => {
  const { textCoordinates, coordinates } = useSelector((state: RootStateType) => state.coordinates);
  const { places } = useSelector((state: RootStateType) => state.places);
  const dispatch = useDispatch();
  const { setValue } = useFormContext();

  const valueLongitude = `${textCoordinates?.longitude || ''}`;
  const valueLatitude = `${textCoordinates?.latitude || ''}`;

  const handleChange =
    (type: EnumCoordinates) => (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      const number = +e.nativeEvent.text;
      const text = e.nativeEvent.text;
      const border = type === EnumCoordinates.long ? 90 : 180;
      if ((number <= border && number >= -border) || text === '+' || text === '-' || text === '.') {
        dispatch(
          editSavedCoords({
            longitude: textCoordinates?.longitude || 0,
            latitude: textCoordinates?.latitude || 0,
            [type]: text
          })
        );
        setValue(`coordinates.${type}`, number || 0);
      }
    };
  const handleActionAfterSave = ({ latitude, longitude }: CoordinatesType) => {
    setValue('coordinates', { latitude: +latitude, longitude: +longitude });
  };
  const handlePickCoordinate = () => {
    dispatch(
      openModal({
        children: (
          <View style={styles.wrapperMap}>
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
          label="Longitude"
          keyboardType="number-pad"
          nameToControl="coordinates.longitude"
          onChange={handleChange(EnumCoordinates.long)}
          style={styles.input}
          value={valueLongitude}
        />
        <CustomTextInput
          label="Latitude"
          keyboardType="number-pad"
          nameToControl="coordinates.latitude"
          onChange={handleChange(EnumCoordinates.lat)}
          value={valueLatitude}
        />
      </View>
      <TouchableOpacity style={styles.wrapperIcon} onPress={handlePickCoordinate}>
        <IconsFont name="map-marker" size={30} style={styles.colorIcon} />
      </TouchableOpacity>
    </View>
  );
};
