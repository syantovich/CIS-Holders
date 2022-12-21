/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import Router from './src/router';
import { Provider } from 'react-redux';
import store from './src/store';
import { ModalOpacity } from 'components/ModalOpacity';

const App = () => {
  return (
    <Provider store={store}>
      <ModalOpacity />
      <Router />
    </Provider>
  );
};

export default App;
