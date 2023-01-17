import { CustomMapProps } from 'components/CustomMap/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/store';
import MapView, { Marker, MarkerDragStartEndEvent, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, SectionList, StyleSheet, View } from 'react-native';
import { pickCoordinates, saveCoords } from 'store/slices/coordinates';
import { closeModal, openModal } from 'store/slices/modal';
import styles from 'components/CustomMap/styles';
import { useCallback, useMemo } from 'react';
import PlaceInfoModal from 'components/PlaceInfoModal';
import { IPlaceType } from 'types/types';

const CustomMap = ({ isChoose, actionAfterSave }: CustomMapProps) => {
  const { places, isLoading } = useSelector((state: RootStateType) => state.places);
  const { coordinates } = useSelector((state: RootStateType) => state.coordinates);
  const dispatch = useDispatch();

  const count = useMemo(() => places.reduce((acc, e) => acc + e.data.length, 0), [places]);

  const coordinatePickedPlace = useMemo(() => {
    if (coordinates) {
      return {
        latitude: +coordinates.latitude,
        longitude: +coordinates.longitude
      };
    } else return coordinates;
  }, [coordinates]);

  const handleOpenItem = (item: IPlaceType) => () => {
    dispatch(openModal({ children: <PlaceInfoModal place={item} /> }));
  };

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

  const placesList = useMemo(() => {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        style={StyleSheet.absoluteFillObject}
        userInterfaceStyle="dark"
        showsScale
        showsMyLocationButton
        showsUserLocation
        onPress={handlePick}
      >
        <SectionList
          initialNumToRender={count * 3}
          sections={places}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Marker
              coordinate={item.coordinates}
              title={item.name}
              key={item.id}
              onCalloutPress={handleOpenItem(item)}
            />
          )}
        />
        {coordinatePickedPlace && isChoose && <Marker coordinate={coordinatePickedPlace} />}
      </MapView>
    );
  }, [places, count, coordinatePickedPlace]);

  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFillObject}>{!isLoading && placesList}</View>
      <View style={styles.wrapperSaveButton}>
        {isChoose && (
          <Button title="Save coordinates" disabled={!coordinates} onPress={handleSave} />
        )}
      </View>
    </View>
  );
};

export default CustomMap;
