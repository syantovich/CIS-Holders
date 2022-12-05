import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from 'router/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import ServicesScene from 'scenes/ServicesScene';
import MapScene from 'scenes/MapScene';
import AddScene from 'scenes/AddScene';

const Tabs = createBottomTabNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icon;
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
        <Tabs.Screen name={'Add'} component={AddScene} options={{ tabBarShowLabel: false }} />
        <Tabs.Screen name="Map" component={MapScene} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default Router;
