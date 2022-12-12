import { View, SectionList, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import Index from 'components/PlaceItem';
import HeaderItem from 'components/HeaderItem';
import styles from 'scenes/ServicesScene/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getPlacesFetch } from 'store/slices/places';
import { RootStateType } from 'src/store';

function ListScreen() {
  const { places, isLoading } = useSelector((state: RootStateType) => state.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlacesFetch());
  }, []);
  return !isLoading ? (
    <View style={styles.container}>
      <SectionList
        sections={places}
        keyExtractor={(item) => item.id}
        renderItem={Index}
        renderSectionHeader={HeaderItem}
      />
    </View>
  ) : (
    <View style={[styles.containerLoad, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

export default ListScreen;
