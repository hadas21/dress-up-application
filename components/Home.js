import {Text, View, StyleSheet, Button, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {setCompleteoutfits, setSelectedOutfit} from '../assets/redux/actions';
import {useNavigation} from '@react-navigation/native';

export default HomeScreen = () => {
  const {clothes, outfit} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [itemsToChoose, setItemsToChoose] = useState();
  const [itemsChosen, setItemsChosen] = useState(0);
  const [completedSets, setCompletedSets] = useState(0);
  const [isOneSetComplete, setIsOneSetComplete] = useState(false);

  useEffect(() => {
    setItemsToChoose(Object.keys(clothes).length);
  }, [clothes]);
  useEffect(() => {
    setItemsChosen(Object.keys(outfit).length);
  }, [outfit]);
  useEffect(() => {
    if (itemsChosen === itemsToChoose) {
      setCompletedSets(completedSets + 1);
      setIsOneSetComplete(true);
    }
  }, [itemsChosen]);
  useEffect(() => {
    dispatch(setCompleteoutfits(outfit));
    dispatch(setSelectedOutfit({}));
    setItemsChosen(0);
  }, [completedSets]);

  return (
    <>
      <View style={styles.view}>
        <Text style={styles.bodyText} category="h1">
          Sets completed: {completedSets}
        </Text>
        <Text style={styles.bodyText} category="h1">
          Dress stattus: {itemsChosen} / {itemsToChoose}
        </Text>
        {isOneSetComplete && (
          <Button
            title="Done"
            style={styles.button}
            color="#f194ff"
            onPress={() => navigation.navigate('Success')}
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
