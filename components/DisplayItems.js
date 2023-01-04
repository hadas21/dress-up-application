import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';

export default DisplayItems = props => {
  const {data} = props;

  const renderColors = colors => {
    return colors.map(color => <Button key={color} title={color} />);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <Text>{item.brand}</Text>
            {renderColors(item.colors)}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 300,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
  },
});
