import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './components/Home';
import ShirtsScreen from './components/Shirts';
import PantsScreen from './components/Pants';
import ShoesScreen from './components/Shoes';

const Drawer = createDrawerNavigator();

export default App = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Shirts" component={ShirtsScreen} />
      <Drawer.Screen name="Pants" component={PantsScreen} />
      <Drawer.Screen name="Shoes" component={ShoesScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);
