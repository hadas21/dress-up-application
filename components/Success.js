import {Image, View, Text, Button, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import TabelOfSelectedOutfits from './TabelOfSelectedOutfits';

const IMG_URL = 'https://picsum.photos/200';

export default Success = ({navigation}) => {
  const [imagePlace, setImage] = useState('');

  const loadImage = async () => {
    try {
      const res = await fetch(IMG_URL);

      const data = res.url;
      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadImage();
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Congrats! checkout your outfits:</Text>
      {imagePlace ? (
        <Image source={{uri: imagePlace}} style={{width: 200, height: 200}} />
      ) : (
        <></>
      )}

      <TabelOfSelectedOutfits />
      <Button
        title={'Pick More Outfits'}
        onPress={() => navigation.navigate('Home')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
  },
});
