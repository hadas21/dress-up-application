import {Image, View, Text} from 'react-native';
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
      {imagePlace ? (
        <Image source={{uri: imagePlace}} style={{width: 200, height: 200}} />
      ) : (
        <></>
      )}
      <TabelOfSelectedOutfits />
    </View>
  );
};
