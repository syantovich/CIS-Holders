import { Animated, useWindowDimensions, View } from 'react-native';
import styles from 'components/Paginator/styles';
import { PaginatorProps } from 'components/Paginator/types';

const Paginator = ({ data, scrollX }: PaginatorProps) => {
  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((e, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp'
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp'
        });
        return <Animated.View style={[styles.dot, { width: dotWidth, opacity }]} key={e.id} />;
      })}
    </View>
  );
};

export default Paginator;
