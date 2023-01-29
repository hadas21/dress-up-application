import React, {useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useDispatch} from 'react-redux';
import {getClothes} from '../assets/redux/actions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

import HomeScreen from '../components/Home';
import ShirtsScreen from '../components/Shirts';
import PantsScreen from '../components/Pants';
import ShoesScreen from '../components/Shoes';

const Drawer = createDrawerNavigator();

export default SideNavigator = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
  }, []);

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Shirts"
        component={ShirtsScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon="fa-shirt" />,
        }}
      />
      <Drawer.Screen
        name="Pants"
        component={PantsScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon="fa-shirt" />,
        }}
      />
      <Drawer.Screen
        name="Shoes"
        component={ShoesScreen}
        options={{
          drawerIcon: () => <FontAwesomeIcon icon="fa-shirt" />,
        }}
      />
    </Drawer.Navigator>
  );
};
