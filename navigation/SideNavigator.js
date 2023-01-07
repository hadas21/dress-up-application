import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {getClothes} from '../assets/redux/actions';

import HomeScreen from '../components/Home';
import ShirtsScreen from '../components/Shirts';
import PantsScreen from '../components/Pants';
import ShoesScreen from '../components/Shoes';

const Drawer = createDrawerNavigator();

export default SideNavigator = () => {
  const {clothes} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
    console.log(clothes.results);
  }, []);

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Shirts"
        component={ShirtsScreen}
        initialParams={{shirts: clothes.shirt}}
      />
      <Drawer.Screen
        name="Pants"
        component={PantsScreen}
        initialParams={{pants: clothes.pants}}
      />
      <Drawer.Screen
        name="Shoes"
        component={ShoesScreen}
        initialParams={{shoes: clothes.shoes}}
      />
    </Drawer.Navigator>
  );
};
