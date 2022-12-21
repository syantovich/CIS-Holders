import { CustomMapProps } from 'components/CustomMap/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from 'src/store';
import { ReactNode, useState } from 'react';
import MapView, { Marker, MarkerDragStartEndEvent, PROVIDER_GOOGLE } from 'react-native-maps';
import { Button, StyleSheet, View } from 'react-native';
import { pickCoordinates, saveCoords } from 'store/slices/coordinates';
import { closeModal } from 'store/slices/modal';

const CustomMap = ({ isChoose, actionAfterSave }: CustomMapProps) => {
  const { places } = useSelector((state: RootStateType) => state.places);
  const { coordinates } = useSelector((state: RootStateType) => state.coordinates);
  const dispatch = useDispatch();

  const handlePick = (e: MarkerDragStartEndEvent) => {
    if (isChoose) {
      dispatch(pickCoordinates(e.nativeEvent.coordinate));
    }
  };
  const handleSave = () => {
    dispatch(saveCoords());
    actionAfterSave && coordinates && actionAfterSave(coordinates);
    dispatch(closeModal());
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        flexDirection: 'column'
      }}
    >
      <View
        style={{
          ...StyleSheet.absoluteFillObject
        }}
      >
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{
            ...StyleSheet.absoluteFillObject
          }}
          userInterfaceStyle="dark"
          showsScale
          showsMyLocationButton
          showsUserLocation
          onPress={handlePick}
        >
          {places.reduce((acc: ReactNode[], group) => {
            group.data.forEach((place) =>
              acc.push(
                <Marker
                  coordinate={{
                    latitude: place.coordinates.latitude,
                    longitude: place.coordinates.longitude
                  }}
                  title={place.name}
                  key={place.id}
                />
              )
            );
            return acc;
          }, [])}
          {coordinates && isChoose && (
            <Marker
              coordinate={{ latitude: +coordinates.latitude, longitude: +coordinates.longitude }}
            />
          )}
        </MapView>
      </View>
      <View style={{ position: 'absolute', bottom: -40, right: 0 }}>
        {isChoose && (
          <Button title="Save coordinates" disabled={!coordinates} onPress={handleSave} />
        )}
      </View>
    </View>
  );
};

export default CustomMap;
