import {Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getClothes} from '../assets/redux/actions';
import DisplayItems from './DisplayItems';

import React, {useEffect} from 'react';

export default Shirst = () => {
  const {shirts} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
    console.log('??????????????', shirts);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Shirts</Text>
      <DisplayItems data={shirts} />
    </View>
  );
};
