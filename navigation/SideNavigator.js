import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from '../components/Home';
import ShirtsScreen from '../components/Shirts';
import PantsScreen from '../components/Pants';
import ShoesScreen from '../components/Shoes';

const Drawer = createDrawerNavigator();

export default SideNavigator = () => {
  const {clothes} = useSelector(state => state.userReducer);

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
