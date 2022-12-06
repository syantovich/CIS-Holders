import { NavigationContainer } from '@react-navigation/native';
import { HomeTabs } from 'router/HomeTabs';
import { DrawerStack } from 'router/DrawerStack';

const Router = () => {
  return (
    <NavigationContainer>
      {/*<HomeTabs />*/}
      <DrawerStack />
    </NavigationContainer>
  );
};

export default Router;
