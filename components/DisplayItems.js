import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setSelectedOutfit} from '../assets/redux/actions';
import {useNavigation} from '@react-navigation/native';

export default DisplayItems = props => {
  const {data} = props;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState({});
  const [showSizes, setShowSizes] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const renderColors = (colors, id, type, name) => {
    return colors.map((color, i) => (
      <TouchableOpacity
        key={i}
        style={{width: 30, height: 30, backgroundColor: color, margin: 5}}
        onPress={() => {
          setSelectedItem({type: type, id: id, color: color, name: name});
          setShowSizes(id);
        }}
      />
    ));
  };

  const renderSizes = sizes => {
    return sizes.map(size => (
      <Button
        key={size}
        title={size.toString()}
        onPress={() => {
          setSelectedItem({...selectedItem, size: size});
          setModalVisible(true);
        }}
      />
    ));
  };

  const handleSave = () => {
    dispatch(setSelectedOutfit(selectedItem));
    setModalVisible(false);
    setShowSizes('');
    navigation.navigate('Home');
  };

  const handleCancle = () => {
    setModalVisible(false);
    setShowSizes('');
  };

  const modal = (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>
            Are ou sure you want to select this item?{'\n\n'}
            {`name: ${selectedItem.name} \n,color: ${selectedItem.color}\n,size: ${selectedItem.size}`}
          </Text>
          <View style={styles.buttonWrapper}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleCancle}>
              <Text style={styles.textStyle}>No</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleSave}>
              <Text style={styles.textStyle}>Yes</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );

  //   console.log('BBBBBBBBBBBBBBB', data);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text>{item.brand}</Text>
              <Text>Select a color:</Text>
              <View style={styles.buttonWrapper}>
                {renderColors(item.colors, item.id, item.type, item.name)}
              </View>
              <Text>Select a size:</Text>
              <View style={styles.buttonWrapper}>
                {showSizes === item.id && renderSizes(item.sizes, item.id)}
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
      {modal}
    </>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginHorizontal: 8,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
