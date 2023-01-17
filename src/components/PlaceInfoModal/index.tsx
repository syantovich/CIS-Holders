import { PlaceInfoModalProps } from 'components/PlaceInfoModal/types';
import { Image, Text, View } from 'react-native';
import styles from 'components/PlaceInfoModal/styles';
import { useMemo } from 'react';

const PlaceInfoModal = ({
  place: {
    name,
    image,
    description,
    coordinates: { latitude, longitude },
    date
  }
}: PlaceInfoModalProps) => {
  const stylesImage = useMemo(() => {
    return image.uri
      ? { wrapper: styles.wrapperImageField, container: { minHeight: 600 } }
      : { wrapper: styles.wrapperField, container: {} };
  }, [image.uri]);
  return (
    <View style={[styles.container, stylesImage.container]}>
      <View style={styles.wrapperFields}>
        <View style={styles.wrapperField}>
          <View style={styles.wrapperFieldText}>
            <Text>Name</Text>
          </View>

          <Text>{name}</Text>
        </View>
        <View style={styles.wrapperField}>
          <View style={styles.wrapperFieldText}>
            <Text>Description</Text>
          </View>
          <Text>{description}</Text>
        </View>
        <View style={stylesImage.wrapper}>
          <View style={styles.wrapperFieldText}>
            <Text>Image</Text>
          </View>
          {image.uri ? <Image source={image} style={styles.image} /> : <Text>No image</Text>}
        </View>
        <View style={styles.wrapperField}>
          <View style={styles.wrapperFieldText}>
            <Text>Latitude</Text>
          </View>
          <Text>{latitude}</Text>
        </View>
        <View style={styles.wrapperField}>
          <View style={styles.wrapperFieldText}>
            <Text>Longitude</Text>
          </View>
          <Text>{longitude}</Text>
        </View>
        <View style={styles.wrapperField}>
          <View style={styles.wrapperFieldText}>
            <Text style={styles.textTimeCreated}>Time created</Text>
          </View>
          <Text style={styles.textTimeCreated}>{date.toDate().toISOString()}</Text>
        </View>
      </View>
    </View>
  );
};

export default PlaceInfoModal;
