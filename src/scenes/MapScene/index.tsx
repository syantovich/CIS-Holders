import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker, MarkerDragStartEndEvent, PROVIDER_GOOGLE } from 'react-native-maps';
import { ReactNode, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from 'src/store';

function MapScreen({}) {
  const { places } = useSelector((state: RootStateType) => state.places);
  const [dragCoord, setDragCoord] = useState<{ latitude: number; longitude: number } | null>(null);

  const handleDrag = (e: MarkerDragStartEndEvent) => {
    setDragCoord(e.nativeEvent.coordinate);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Map Screen</Text>
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          height: '100%',
          width: '100%'
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
          onPress={handleDrag}
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
          {dragCoord && <Marker coordinate={dragCoord} />}
        </MapView>
      </View>
    </View>
  );
}

export default MapScreen;
