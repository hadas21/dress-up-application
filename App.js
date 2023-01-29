import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './assets/redux/store';
import StackNavigator from './navigation/StackNavigator';

import {NavigationContainer} from '@react-navigation/native';

// in App.js
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faShirt} from '@fortawesome/free-solid-svg-icons/faShirt';
import {faSocks} from '@fortawesome/free-solid-svg-icons/faSocks';

library.add(fab, faShirt, faSocks);

export default App = () => (
  <Provider store={Store}>
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  </Provider>
);
