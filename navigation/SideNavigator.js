import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {getClothes} from '../assets/redux/actions';

import HomeScreen from '../components/Home';
import ShirtsScreen from '../components/Shirts';
import PantsScreen from '../components/Pants';
import ShoesScreen from '../components/Shoes';

const Drawer = createDrawerNavigator();

export default SideNavigator = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Shirts" component={ShirtsScreen} />
      <Drawer.Screen name="Pants" component={PantsScreen} />
      <Drawer.Screen name="Shoes" component={ShoesScreen} />
    </Drawer.Navigator>
  );
};
