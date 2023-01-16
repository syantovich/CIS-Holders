import { View } from 'react-native';
import SliderInfoList from 'components/SliderInfoList';
import styles from 'scenes/AboutUsScene/styles';

function AboutUs() {
  return (
    <View style={styles.container}>
      <SliderInfoList />
    </View>
  );
}

export default AboutUs;
