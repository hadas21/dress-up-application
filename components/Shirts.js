import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import DisplayItems from './DisplayItems';

export default Shirst = () => {
  const {clothes} = useSelector(state => state.userReducer);

  const shirts = clothes.shirt;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Shirts</Text>
      <DisplayItems data={shirts} />
    </View>
  );
};
