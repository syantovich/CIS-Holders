import { View, Text } from 'react-native';
import SliderInfoList from 'components/SliderInfoList';

function AboutUs() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*<Text>About us Screen</Text>*/}
      <SliderInfoList />
    </View>
  );
}

export default AboutUs;
