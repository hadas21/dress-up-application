import {Text, View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getClothes} from '../assets/redux/actions';
import DisplayItems from './DisplayItems';

import React, {useEffect} from 'react';

export default Pants = () => {
  const {pants} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClothes());
    console.log('??????????????', pants);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">pants</Text>
      <DisplayItems data={pants} />
    </View>
  );
};
