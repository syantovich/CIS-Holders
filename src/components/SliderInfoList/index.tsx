import { useSelector } from 'react-redux';
import { RootStateType } from 'store/index';
import { ActivityIndicator, FlatList, Animated, ViewToken, View } from 'react-native';
import Slide from 'components/SliderInfoList/Slide';
import { useRef, useState } from 'react';
import Paginator from 'components/Paginator';
import styles from 'components/SliderInfoList/styles';

const SliderInfoList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { isLoading, sliders } = useSelector((state: RootStateType) => state.aboutUs);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);
  const viewableItemsChange = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      if (viewableItems[0].index) {
        setCurrentIndex(viewableItems[0].index);
      }
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <View>
      <View style={styles.wrapperList}>
        <FlatList
          data={sliders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Slide slide={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
            useNativeDriver: false
          })}
          onViewableItemsChanged={viewableItemsChange}
          scrollEventThrottle={32}
          ref={slidesRef}
          viewabilityConfig={viewConfig}
        />
      </View>
      <View style={styles.wrapperPaginator}>
        <Paginator data={sliders} scrollX={scrollX} />
      </View>
    </View>
  );
};
export default SliderInfoList;
