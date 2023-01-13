import { View, SectionList, ActivityIndicator, RefreshControl } from 'react-native';
import { useEffect } from 'react';
import HeaderItem from 'components/HeaderItem';
import styles from 'scenes/ServicesScene/styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootStateType } from 'src/store';
import PlaceItem from 'components/PlaceItem';
import { checkFilters } from 'store/slices/filters';

function ListScreen() {
  const { places, isLoading } = useSelector((state: RootStateType) => state.places);
  const filters = useSelector((state: RootStateType) => state.filters);
  const dispatch = useDispatch();
  const fetchingData = async () => {
    dispatch(checkFilters(filters));
  };
  useEffect(() => {
    fetchingData();
  }, []);
  return !isLoading ? (
    <View style={styles.container}>
      <SectionList
        sections={places}
        keyExtractor={(item) => item.id}
        renderItem={PlaceItem}
        renderSectionHeader={HeaderItem}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              console.log('refreshing');
              fetchingData();
            }}
          />
        }
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
