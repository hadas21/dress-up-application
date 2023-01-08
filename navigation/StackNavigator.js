// ./navigation/StackNavigator.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import HomeScreen from '../components/Home';
import SuccessScreen from '../components/Success';
import SideNavigator from './SideNavigator';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

export default StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="SideNavigator" component={SideNavigator} />
      <Stack.Screen name="Success" component={SuccessScreen} />
    </Stack.Navigator>
  );
};
