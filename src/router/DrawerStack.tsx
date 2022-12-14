import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerStackList } from 'router/types';
import { HomeTabs } from 'router/HomeTabs';
import AboutUsScene from 'scenes/AboutUsScene';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ServicesScene from 'scenes/ServicesScene';
import AddScene from 'scenes/AddScene';
import MapScene from 'scenes/MapScene';
import AboutUs from 'scenes/AboutUsScene';

const Drawer = createDrawerNavigator<RootDrawerStackList>();
const Stack = createNativeStackNavigator();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="About us" component={AboutUs} />
      <Drawer.Screen name="Home" component={HomeTabs} />
    </Drawer.Navigator>
  );
};
