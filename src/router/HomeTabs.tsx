import Icon from 'react-native-vector-icons/Feather';
import ServicesScene from 'scenes/ServicesScene';
import AddScene from 'scenes/AddScene';
import MapScene from 'scenes/MapScene';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabsParamsList } from 'router/types';
import { BOTTOM_PAGES } from 'router/constants';

const { Navigator, Screen } = createBottomTabNavigator<RootTabsParamsList>();

export const HomeTabs = () => {
  return (
    <Navigator
      initialRouteName={BOTTOM_PAGES.SERVICES}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon = 'plus-circle';
          switch (route.name) {
            case BOTTOM_PAGES.SERVICES: {
              icon = 'list';
              break;
            }
            case BOTTOM_PAGES.MAP: {
              icon = 'map-pin';
              break;
            }
            case BOTTOM_PAGES.ADD: {
              icon = 'plus-circle';
              break;
            }
          }
          return <Icon name={icon} color={color} size={size} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      })}
    >
      <Screen
        name={BOTTOM_PAGES.SERVICES}
        component={ServicesScene}
        options={{ headerShown: false }}
      />
      <Screen
        name={BOTTOM_PAGES.ADD}
        component={AddScene}
        options={{
          title: '',
          headerTitle: undefined,
          headerShown: false
        }}
      />
      <Screen name={BOTTOM_PAGES.MAP} component={MapScene} options={{ headerShown: false }} />
    </Navigator>
  );
};
