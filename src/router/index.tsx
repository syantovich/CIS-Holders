import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from 'router/DrawerStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTabs } from 'router/HomeTabs';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AppDrawerStack"
          component={DrawerStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
