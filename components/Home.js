import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
// import {useSelector, useDispatch} from 'react-redux';
// import {getClothes} from '../assets/redux/actions';

const completeSets = 1;
const itemsChosen = 3;
const itemsToChoose = 3;
const isDressComplete = itemsChosen === itemsToChoose;
export default HomeScreen = () => {
  // const {clothes} = useSelector(state => state.userReducer);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getClothes());
  //   console.log(clothes.results);
  // }, []);

  return (
    <>
      <Text style={styles.titleText}>Application</Text>

      <View style={styles.view}>
        <Text style={styles.bodyText} category="h1">
          Sets completed: {completeSets}
        </Text>
        <Text style={styles.bodyText} category="h1">
          Dress stattus: {itemsChosen} / {itemsToChoose}
        </Text>
        {isDressComplete && (
          <Button
            title="Done"
            style={styles.button}
            color="#f194ff"
            onPress={() => console.log('Button with adjusted color pressed')}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    margin: 20,
  },
  bodyText: {
    fontSize: 15,
    margin: 5,
  },
  button: {
    margin: 5,
  },
});
