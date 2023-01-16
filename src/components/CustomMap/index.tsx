import { CustomMapProps } from 'components/CustomMap/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/store';
import MapView, { Marker, MarkerDragStartEndEvent, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, SectionList, StyleSheet, View } from 'react-native';
import { pickCoordinates, saveCoords } from 'store/slices/coordinates';
import { closeModal } from 'store/slices/modal';
import styles from 'components/CustomMap/styles';
import { useCallback, useMemo } from 'react';

const CustomMap = ({ isChoose, actionAfterSave }: CustomMapProps) => {
  const { places, isLoading } = useSelector((state: RootStateType) => state.places);
  const { coordinates } = useSelector((state: RootStateType) => state.coordinates);
  const dispatch = useDispatch();

  const count = useMemo(() => places.reduce((acc, e) => acc + e.data.length, 0), [places]);

  const placesList = useMemo(
    () => (
      <SectionList
        initialNumToRender={count * 3}
        sections={places}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { coordinates, name, id } }) => (
          <Marker coordinate={coordinates} title={name} key={id} />
        )}
      />
    ),
    [places, count]
  );

  const coordinatePickedPlace = useMemo(() => {
    if (coordinates) {
      return {
        latitude: +coordinates.latitude,
        longitude: +coordinates.longitude
      };
    } else return coordinates;
  }, [coordinates]);

  const handlePick = (e: MarkerDragStartEndEvent) => {
    if (isChoose) {
      dispatch(pickCoordinates(e.nativeEvent.coordinate));
    }
  };
  const handleSave = useCallback(() => {
    dispatch(saveCoords());
    actionAfterSave && coordinates && actionAfterSave(coordinates);
    dispatch(closeModal());
  }, [coordinates, actionAfterSave]);

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          userInterfaceStyle="dark"
          showsScale
          showsMyLocationButton
          showsUserLocation
          onPress={handlePick}
        >
          {!isLoading && placesList}
          {coordinatePickedPlace && isChoose && <Marker coordinate={coordinatePickedPlace} />}
        </MapView>
      </View>
      <View style={styles.wrapperSaveButton}>
        {isChoose && (
          <Button title="Save coordinates" disabled={!coordinates} onPress={handleSave} />
        )}
      </View>
    </View>
  );
};

export default CustomMap;
