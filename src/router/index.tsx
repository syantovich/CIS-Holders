import { NavigationContainer } from '@react-navigation/native';
import { DrawerStack } from 'router/DrawerStack';

const Router = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default Router;
