import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './assets/redux/store';
// import SideNavigator from './navigation/SideNavigator';
import StackNavigator from './navigation/StackNavigator';

import {NavigationContainer} from '@react-navigation/native';

export default App = () => (
  <Provider store={Store}>
    <NavigationContainer>
      {/* <SideNavigator /> */}

      <StackNavigator />
    </NavigationContainer>
  </Provider>
);
