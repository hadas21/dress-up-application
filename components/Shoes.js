import {Text, View} from 'react-native';

import DisplayItems from './DisplayItems';

export default Shoes = ({route}) => {
  const shoes = route.params.shoes;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">shoes</Text>
      <DisplayItems data={shoes} />
    </View>
  );
};
