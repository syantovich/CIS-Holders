import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerStackList } from 'router/types';
import { HomeTabs } from 'router/HomeTabs';
import AboutUs from 'scenes/AboutUsScene';
import { getHeaderTitle } from '@react-navigation/elements';
import { Text } from 'react-native';
import NavigationHeader from 'components/NavigationHeader';

const Drawer = createDrawerNavigator<RootDrawerStackList>();

export const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="About us"
        component={AboutUs}
        options={{
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <NavigationHeader title={title} navigation={navigation} />;
          }
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeTabs}
        options={{
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <NavigationHeader title={title} isSort={true} navigation={navigation} />;
          }
        }}
      />
    </Drawer.Navigator>
  );
};
