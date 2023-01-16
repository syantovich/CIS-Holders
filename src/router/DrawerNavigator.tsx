import { PAGES_NAVIGATOR } from 'router/constants';
import { getHeaderTitle } from '@react-navigation/elements';
import NavigationHeader from 'router/NavigationHeader';
import { HomeTabs } from 'router/HomeTabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerStackList } from 'router/types';
import StackScreens from 'router/StackNavigator';

const Drawer = createDrawerNavigator<RootDrawerStackList>();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName={PAGES_NAVIGATOR.HOME}>
      <Drawer.Screen
        name={PAGES_NAVIGATOR.ANOTHER}
        component={StackScreens}
        options={{
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);
            return <NavigationHeader title={title} navigation={navigation} />;
          },
          title: PAGES_NAVIGATOR.ABOUT
        }}
      />
      <Drawer.Screen
        name={PAGES_NAVIGATOR.HOME}
        component={HomeTabs}
        options={({ navigation, route: { name } }) => {
          return {
            header: ({ options }) => {
              const title = getHeaderTitle(options, name);
              return <NavigationHeader title={title} isSort={true} navigation={navigation} />;
            },
            drawerItemStyle: { display: name === PAGES_NAVIGATOR.HOME ? 'none' : 'flex' }
          };
        }}
      />
    </Drawer.Navigator>
  );
};
