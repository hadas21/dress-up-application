import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import DisplayItems from './DisplayItems';

export default Success = () => {
  const {clothes} = useSelector(state => state.userReducer);
  const shoes = clothes.shoes;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">shoes</Text>
      <DisplayItems data={shoes} />
    </View>
  );
};
