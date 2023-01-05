import clothes from '../utils/clothesEnum';

export const SHIRTS = 'SHIRTS';
export const PANTS = 'PANTS';
export const SHOES = 'SHOES';
export const SET_SELECTED_OUTFIT = 'SET_SELECTED_OUTFIT';

const API_URL =
  'http://www.mocky.io/v2/5e3940013200005e00ddf87e?mocky-delay=600ms';

export const getClothes = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await result.json();
      if (json) {
        const resultArr = json.results;

        const shirtsArr = resultArr.filter(r => r.type === 'shirt');
        const pantsArr = resultArr.filter(r => r.type === clothes.pants);
        const shoesArr = resultArr.filter(r => r.type === clothes.shoes);

        dispatch({
          type: SHIRTS,
          payload: shirtsArr,
        });
        dispatch({
          type: PANTS,
          payload: pantsArr,
        });
        dispatch({
          type: SHOES,
          payload: shoesArr,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const setSelectedOutfit = selectedItem => dispatch => {
  try {
    console.log('action!!!!!!!!!', selectedItem);
    dispatch({
      type: SET_SELECTED_OUTFIT,
      payload: selectedItem,
    });
  } catch (error) {
    console.log(error);
  }
};
