import {Text, View} from 'react-native';

import DisplayItems from './DisplayItems';

export default Pants = ({route}) => {
  const pants = route.params.pants;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">pants</Text>
      <DisplayItems data={pants} />
    </View>
  );
};
