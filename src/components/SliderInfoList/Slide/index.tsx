import { SlideProps } from 'components/SliderInfoList/Slide/types';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import styles from 'components/SliderInfoList/Slide/styles';

const Slide = ({ slide: { imageUrl, name, description } }: SlideProps) => {
  const source = { uri: imageUrl };
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image source={source} style={[styles.image, { width: '100%' }]} />
      <View style={styles.wrapperText}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
export default Slide;
