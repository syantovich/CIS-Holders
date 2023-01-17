import { View, SectionList, ActivityIndicator, RefreshControl } from 'react-native';
import { useEffect } from 'react';
import HeaderItem from 'components/HeaderItem';
import styles from 'scenes/ServicesScene/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from 'src/store';
import PlaceItem from 'components/PlaceItem';
import { checkFilters } from 'store/slices/filters';
import ListEmpty from 'components/ListEmpty';

function ListScreen() {
  const { places, isLoading } = useSelector((state: RootStateType) => state.places);
  const dispatch = useDispatch();
  const fetchingData = async () => {
    dispatch(checkFilters());
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return !isLoading ? (
    <View style={styles.container}>
      <SectionList
        sections={places}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<ListEmpty />}
        renderItem={PlaceItem}
        renderSectionHeader={HeaderItem}
        stickySectionHeadersEnabled
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchingData} />}
        refreshing={true}
      />
    </View>
  ) : (
    <View style={[styles.containerLoad, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

export default ListScreen;
