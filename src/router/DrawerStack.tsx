import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerStackList } from 'router/types';
import { HomeTabs } from 'router/HomeTabs';
import AboutUsScene from 'scenes/AboutUsScene';

const Drawer = createDrawerNavigator<RootDrawerStackList>();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="About us" component={AboutUsScene} />
      <Drawer.Screen name="Home" component={HomeTabs} />
    </Drawer.Navigator>
  );
};
