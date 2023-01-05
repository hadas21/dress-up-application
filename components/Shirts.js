import {Text, View} from 'react-native';
import DisplayItems from './DisplayItems';

export default Shirst = ({route}) => {
  const shirts = route.params.shirts;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text category="h1">Shirts</Text>
      <DisplayItems data={shirts} />
    </View>
  );
};
