import AboutUs from 'scenes/AboutUsScene';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ANOTHER_PAGES } from 'router/constants';

const Stack = createNativeStackNavigator();

const StackScreens = () => {
  return (
    <Stack.Navigator initialRouteName={ANOTHER_PAGES.ABOUT} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ANOTHER_PAGES.ABOUT} component={AboutUs} />
    </Stack.Navigator>
  );
};

export default StackScreens;
