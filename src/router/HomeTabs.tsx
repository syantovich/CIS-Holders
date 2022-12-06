import Icon from 'react-native-vector-icons/Feather';
import ServicesScene from 'scenes/ServicesScene';
import AddScene from 'scenes/AddScene';
import MapScene from 'scenes/MapScene';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabsParamsList } from 'router/types';

const Tabs = createBottomTabNavigator<RootTabsParamsList>();

export const HomeTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#9AC4F8'
        },
        headerTintColor: 'white',
        headerBackTitle: 'Back',
        tabBarIcon: ({ color, size }) => {
          let icon = 'plus-circle';
          switch (route.name) {
            case 'Services': {
              icon = 'list';
              break;
            }
            case 'Map': {
              icon = 'map-pin';
              break;
            }
            case 'Add': {
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
      <Tabs.Screen name="Services" component={ServicesScene} />
      <Tabs.Screen
        name="Add"
        component={AddScene}
        options={{ title: '', headerTitle: undefined }}
      />
      <Tabs.Screen name="Map" component={MapScene} />
    </Tabs.Navigator>
  );
};
