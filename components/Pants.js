import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import DisplayItems from './DisplayItems';

export default Pants = () => {
  const {clothes} = useSelector(state => state.userReducer);

  const pants = clothes.pants;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">pants</Text>
      <DisplayItems data={pants} />
    </View>
  );
};
